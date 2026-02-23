# Dark Mode Implementation Guide

## Overview

AquaGuide uses a minimal dark mode implementation with Tailwind CSS class-based switching.

## Usage

### Adding Dark Mode to Components

Every component should follow this pattern:

```tsx
<div className={cn(
  // Light mode (default)
  'bg-white text-gray-900 border-gray-200',
  
  // Dark mode (prefix with dark:)
  'dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800',
  
  // Interactive states work in both modes
  'hover:shadow-lg transition-all'
)}>
```

## Color Mapping Reference

### Backgrounds
```tsx
bg-white          → bg-white dark:bg-gray-950
bg-gray-50        → bg-gray-50 dark:bg-gray-900
bg-gray-100       → bg-gray-100 dark:bg-gray-800
```

### Text
```tsx
text-gray-900     → text-gray-900 dark:text-gray-100
text-gray-800     → text-gray-800 dark:text-gray-200
text-gray-700     → text-gray-700 dark:text-gray-300
text-gray-600     → text-gray-600 dark:text-gray-400
text-gray-500     → text-gray-500 (stays same)
text-gray-400     → text-gray-400 dark:text-gray-600
```

### Borders
```tsx
border-gray-200   → border-gray-200 dark:border-gray-800
border-gray-300   → border-gray-300 dark:border-gray-700
```

### Brand Colors
```tsx
// Most brand colors stay consistent
text-coral-500    → text-coral-500 (or dark:text-coral-400 if too bright)
bg-emerald-500    → bg-emerald-500 (stays same)
text-sapphire-500 → text-sapphire-500 dark:text-sapphire-400
```

## Using the Theme Hook

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { isDark, toggle } = useTheme();
  
  return (
    <div>
      <p>Current theme: {isDark ? 'Dark' : 'Light'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

## Theme Toggle Component

Add to your Header/Navbar:

```tsx
import { ThemeToggle } from '@/components/ui/ThemeToggle';

<header>
  {/* ... other nav items ... */}
  <ThemeToggle />
</header>
```

## Utility Classes

Use these pre-made classes for consistency:

```tsx
// Card
<div className="card">
  {/* bg-white dark:bg-gray-900 + border + shadow */}
</div>

// Card with hover effect
<div className="card card-hover">
  {/* Scales slightly on hover */}
</div>

// Input field
<input className="input-base" />

// Primary button
<button className="btn-primary">Click me</button>

// Secondary button
<button className="btn-secondary">Cancel</button>
```

## Special Cases

### Images
```tsx
// Most images: no change needed
<img src={url} alt={alt} />

// Adjust brightness if too bright in dark mode
<img src={url} alt={alt} className="dark:brightness-75" />
```

### Charts (Recharts)
```tsx
import { useTheme } from '@/hooks/useTheme';

const { isDark } = useTheme();

const lineColor = isDark ? '#60A5FA' : '#0F52BA';
const textColor = isDark ? '#F9FAFB' : '#1F2937';
```

### Gradients
```tsx
// Simple gradients work in both modes
className="bg-gradient-to-br from-coral-500 to-emerald-500"

// Adjust if needed
className={cn(
  'bg-gradient-to-br',
  'from-coral-500 to-emerald-500',
  'dark:from-coral-400 dark:to-emerald-400'
)}
```

## Testing Checklist

For each component:
- [ ] Light mode looks good
- [ ] Dark mode looks good
- [ ] Hover states work in both modes
- [ ] Focus states visible (accessibility)
- [ ] Text is readable (sufficient contrast)
- [ ] Images don't look washed out
- [ ] Borders are visible but not harsh

## Migration Script

To bulk-migrate existing files:

```bash
chmod +x scripts/migrate-dark-mode.sh
./scripts/migrate-dark-mode.sh
```

Always review changes manually after running the script.

## Troubleshooting

### Theme doesn't persist
- Check localStorage in DevTools
- Verify `useTheme` hook is called

### Flickering on page load
- Add inline script to `index.html` before body:
```html
<script>
  if (localStorage.getItem('aquaguide-theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
</script>
```

### Colors look wrong
- Check Tailwind config has `darkMode: 'class'`
- Verify `dark:` prefix is used correctly
- Test with DevTools: `document.documentElement.classList.toggle('dark')`

## Best Practices

1. **Always pair light + dark** - Every neutral color needs a dark: variant
2. **Test both modes** - Toggle while developing
3. **Use semantic naming** - Prefer `text-gray-600` over arbitrary values
4. **Keep brand colors bold** - They should pop in both modes
5. **Smooth transitions** - Add `transition-colors duration-200`
6. **Accessibility first** - Ensure WCAG AA contrast ratios

## Resources

- [Tailwind Dark Mode Docs](https://tailwindcss.com/docs/dark-mode)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Dark Mode Design Guide](https://www.refactoringui.com/)
