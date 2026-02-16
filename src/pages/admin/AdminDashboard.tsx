import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Fish, Droplets, Activity, Plus, Settings } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { SEOHead } from '../../components/seo/SEOHead';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    species: 0,
    tanks: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const [usersRes, speciesRes, tanksRes] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('species').select('id', { count: 'exact', head: true }),
      supabase.from('tanks').select('id', { count: 'exact', head: true }),
    ]);

    setStats({
      users: usersRes.count || 0,
      species: speciesRes.count || 0,
      tanks: tanksRes.count || 0,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <SEOHead title="Admin Dashboard - AquaGuide" description="Manage species, users, and content." />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Manage your AquaGuide database</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<Users className="w-6 h-6" />} label="Total Users" value={stats.users} color="indigo" />
          <StatCard icon={<Fish className="w-6 h-6" />} label="Species" value={stats.species} color="emerald" />
          <StatCard icon={<Droplets className="w-6 h-6" />} label="Tanks" value={stats.tanks} color="cyan" />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/admin/species"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl border border-emerald-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Fish className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Manage Species</h3>
                <p className="text-sm text-slate-600">Add, edit, or remove fish and plants</p>
              </div>
            </Link>

            <Link
              to="/admin/users"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Manage Users</h3>
                <p className="text-sm text-slate-600">View and modify user roles</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, color }: any) => {
  const colors = {
    indigo: 'from-indigo-500 to-indigo-600',
    emerald: 'from-emerald-500 to-emerald-600',
    cyan: 'from-cyan-500 to-cyan-600',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-1">{label}</p>
          <p className="text-3xl font-black text-slate-900">{value}</p>
        </div>
        <div className={`w-14 h-14 bg-gradient-to-br ${colors[color]} rounded-xl flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
