#!/bin/bash

# Dark Mode Migration Script for AquaGuide
# Automatically adds dark: prefixes to common color classes

echo "🌙 Starting Dark Mode Migration..."
echo ""

# Backup first
echo "📦 Creating backup..."
tar -czf "backup-$(date +%Y%m%d-%H%M%S).tar.gz" src/
echo "✅ Backup created"
echo ""

# Counter for changes
changes=0

# Function to update files
migrate_file() {
  local file="$1"
  local temp_file="${file}.tmp"
  
  # Skip if file doesn't exist or is already migrated
  if [[ ! -f "$file" ]]; then
    return
  fi
  
  # Check if file already has dark: classes (skip if yes)
  if grep -q "dark:" "$file"; then
    echo "⏭️  Skipping $file (already migrated)"
    return
  fi
  
  # Apply migrations
  sed -E \
    -e 's/\bbg-white([^-]|$)/bg-white dark:bg-gray-950\1/g' \
    -e 's/\bbg-gray-50([^-]|$)/bg-gray-50 dark:bg-gray-900\1/g' \
    -e 's/\bbg-gray-100([^-]|$)/bg-gray-100 dark:bg-gray-800\1/g' \
    -e 's/\btext-gray-900([^-]|$)/text-gray-900 dark:text-gray-100\1/g' \
    -e 's/\btext-gray-800([^-]|$)/text-gray-800 dark:text-gray-200\1/g' \
    -e 's/\btext-gray-700([^-]|$)/text-gray-700 dark:text-gray-300\1/g' \
    -e 's/\btext-gray-600([^-]|$)/text-gray-600 dark:text-gray-400\1/g' \
    -e 's/\btext-gray-500([^-]|$)/text-gray-500 dark:text-gray-500\1/g' \
    -e 's/\btext-gray-400([^-]|$)/text-gray-400 dark:text-gray-600\1/g' \
    -e 's/\bborder-gray-200([^-]|$)/border-gray-200 dark:border-gray-800\1/g' \
    -e 's/\bborder-gray-300([^-]|$)/border-gray-300 dark:border-gray-700\1/g' \
    "$file" > "$temp_file"
  
  # Check if changes were made
  if ! cmp -s "$file" "$temp_file"; then
    mv "$temp_file" "$file"
    echo "✅ Migrated: $file"
    ((changes++))
  else
    rm "$temp_file"
  fi
}

# Migrate TypeScript/JSX files
echo "🔄 Migrating component files..."
while IFS= read -r -d '' file; do
  migrate_file "$file"
done < <(find src/components src/pages -type f \( -name "*.tsx" -o -name "*.jsx" \) -print0)

echo ""
echo "📊 Migration Summary:"
echo "   Files changed: $changes"
echo ""
echo "⚠️  IMPORTANT: Manual review required!"
echo "   1. Check git diff for unexpected changes"
echo "   2. Test components visually"
echo "   3. Adjust brand colors (coral, emerald) if needed"
echo "   4. Fix any edge cases"
echo ""
echo "🎨 Next steps:"
echo "   - Add <ThemeToggle /> to Header component"
echo "   - Test with: npm run dev"
echo "   - Toggle theme and verify all pages"
echo ""
echo "✨ Migration complete!"
