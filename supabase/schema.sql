-- Enable Row Level Security (RLS) for all tables
-- This is a security best practice. We will define policies for each table.

-- 1. USERS PROFILES (Public data linked to auth.users)
create table public.profiles (
  id uuid references auth.users not null primary key,
  username text unique,
  email text,
  full_name text,
  avatar_url text,
  role text default 'user' check (role in ('user', 'admin', 'moderator')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- 2. TANKS (User Aquariums)
create table public.tanks (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  name text not null,
  volume_liters numeric,
  dimensions text, -- e.g. "60x30x30"
  type text default 'freshwater' check (type in ('freshwater', 'saltwater', 'brackish')),
  status text default 'active' check (status in ('active', 'planning', 'retired')),
  image_url text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.tanks enable row level security;

-- Policies for tanks
create policy "Tanks are viewable by everyone (public portfolio)."
  on public.tanks for select
  using ( true );

create policy "Users can create their own tanks."
  on public.tanks for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own tanks."
  on public.tanks for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own tanks."
  on public.tanks for delete
  using ( auth.uid() = user_id );

-- 3. SPECIES (Fish/Inverts/Plants Database)
-- Allows admins to manage species dynamically instead of hardcoded JSON
create table public.species (
  id uuid default uuid_generate_v4() primary key,
  slug text unique not null,
  scientific_name text not null,
  common_name text not null,
  type text not null check (type in ('fish', 'invertebrate', 'plant', 'coral')),
  
  -- Core Stats
  difficulty text check (difficulty in ('beginner', 'intermediate', 'advanced', 'expert')),
  min_tank_size_liters integer,
  min_group_size integer default 1,
  
  -- Water Parameters (JSONB for flexibility: { min: 6.0, max: 7.5 })
  ph_range jsonb,
  temp_range_c jsonb,
  hardness_range_dgh jsonb,
  
  -- Content
  description text,
  care_guide text,
  diet text,
  behavior_tags text[], -- Array of strings e.g. ['schooling', 'peaceful']
  image_url text,
  image_credit text, -- Photo attribution
  
  -- Metadata
  created_by uuid references public.profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.species enable row level security;

-- Policies for species
create policy "Species are viewable by everyone."
  on public.species for select
  using ( true );

create policy "Admins can insert species."
  on public.species for insert
  with check ( 
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

create policy "Admins can update species."
  on public.species for update
  using ( 
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

create policy "Admins can delete species."
  on public.species for delete
  using ( 
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

-- 4. TANK INHABITANTS (Linking Tanks <-> Species)
create table public.tank_inhabitants (
  id uuid default uuid_generate_v4() primary key,
  tank_id uuid references public.tanks(id) on delete cascade not null,
  species_id uuid references public.species(id), -- Optional: Link to DB species
  custom_name text, -- Optional: "My Betta"
  custom_species_name text, -- If species not in DB
  quantity integer default 1,
  added_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.tank_inhabitants enable row level security;

create policy "Tank inhabitants viewable by everyone."
  on public.tank_inhabitants for select
  using ( true );

create policy "Users can manage their own tank inhabitants."
  on public.tank_inhabitants for all
  using ( 
    exists (
      select 1 from public.tanks
      where tanks.id = tank_inhabitants.tank_id and tanks.user_id = auth.uid()
    )
  );

-- 5. WATER PARAMETERS LOGS
create table public.water_logs (
  id uuid default uuid_generate_v4() primary key,
  tank_id uuid references public.tanks(id) on delete cascade not null,
  measured_at timestamp with time zone default timezone('utc'::text, now()) not null,
  ph numeric,
  ammonia numeric,
  nitrite numeric,
  nitrate numeric,
  temperature_c numeric,
  kh numeric,
  gh numeric,
  notes text
);

alter table public.water_logs enable row level security;

create policy "Users can see their own logs."
  on public.water_logs for select
  using (
    exists (
      select 1 from public.tanks
      where tanks.id = water_logs.tank_id and tanks.user_id = auth.uid()
    )
  );

create policy "Users can manage their own logs."
  on public.water_logs for all
  using (
    exists (
      select 1 from public.tanks
      where tanks.id = water_logs.tank_id and tanks.user_id = auth.uid()
    )
  );

-- 6. ADMIN AUDIT LOGS (Optional security)
create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  action text not null,
  details jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.audit_logs enable row level security;

create policy "Only admins can view audit logs."
  on public.audit_logs for select
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );


-- FUNCTIONS & TRIGGERS

-- Function to handle new user creation automatically
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, username, role)
  values (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'username',
    'user' -- Default role
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Helper to make the first user an admin (Run manually once if needed, or update via dashboard)
-- update public.profiles set role = 'admin' where email = 'your-email@example.com';
