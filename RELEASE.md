# Release Guide

## Setup (First Time Only)

Before using the release scripts, install dependencies:

```bash
npm install
```

This will install `standard-version` and all other required packages.

## Automated Release Process

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) for automated versioning and changelog generation.

## Quick Start

### 1. Make commits using Conventional Commits

```bash
# Features
git commit -m "feat: add new species filter"
git commit -m "feat(knowledge): add new article about nitrogen cycle"

# Bug fixes
git commit -m "fix: resolve navigation bug on mobile"
git commit -m "fix(tank-builder): correct bioload calculation"

# Other types
git commit -m "docs: update README with new screenshots"
git commit -m "chore: update dependencies"
git commit -m "refactor: improve species search performance"
git commit -m "perf: optimize image loading"
```

### 2. Create a release

```bash
# Automatic version bump based on commits
npm run release

# Specific version bumps
npm run release:patch  # 0.0.7 -> 0.0.8
npm run release:minor  # 0.0.7 -> 0.1.0
npm run release:major  # 0.0.7 -> 1.0.0

# Preview changes without committing
npm run release:dry

# Pre-release versions
npm run release:pre    # 0.0.7 -> 0.0.8-0
```

### 3. Push to GitHub

```bash
# Push commit and tags
git push --follow-tags origin main
```

## Commit Message Format

### Structure
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semi colons, etc)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **build**: Build system changes
- **ci**: CI/CD changes
- **revert**: Revert a previous commit

### Scopes (optional)

Examples of scopes for AquaGuide:
- `species`
- `plants`
- `tank-builder`
- `knowledge`
- `diseases`
- `ui`
- `api`
- `auth`

### Examples

```bash
# Simple feature
feat: add temperature filter to species search

# Feature with scope
feat(tank-builder): add preset tank configurations

# Bug fix with scope and breaking change
fix(api)!: change species data structure

BREAKING CHANGE: The species API now returns nested taxonomy object

# Multiple paragraphs
feat(knowledge): add comprehensive water chemistry guide

This guide covers pH, hardness, ammonia, nitrite, and nitrate.
Includes interactive diagrams and beginner-friendly explanations.

Closes #123
```

## Version Bumping Rules

- **MAJOR**: Breaking changes (commits with `!` or `BREAKING CHANGE`)
- **MINOR**: New features (`feat` commits)
- **PATCH**: Bug fixes (`fix` commits)

## What `npm run release` Does

1. ✅ Analyzes git commits since last release
2. ✅ Determines next version number (based on conventional commits)
3. ✅ Updates `package.json` version
4. ✅ Generates/updates `CHANGELOG.md`
5. ✅ Creates a git commit with changes
6. ✅ Creates a git tag (e.g., `v0.0.8`)
7. ❌ Does NOT push to remote (you control when to push)

## Manual Override

If you need to manually edit the changelog:

1. Run `npm run release:dry` to see what will happen
2. Run `npm run release`
3. Edit `CHANGELOG.md` as needed
4. Amend the release commit:
   ```bash
   git add CHANGELOG.md
   git commit --amend --no-edit
   ```
5. Push with tags:
   ```bash
   git push --follow-tags origin main
   ```

## Troubleshooting

### "standard-version not found" or command not recognized

**Solution**: Install dependencies first
```bash
npm install
```

This installs `standard-version` along with all other project dependencies.

### "No commits since last release"

You haven't made any commits since the last tag. Make some changes first.

### Undo a release (before pushing)

```bash
# Delete the tag
git tag -d v0.0.8

# Reset to previous commit
git reset --hard HEAD~1
```

### Skip CI on release commits

Add `[skip ci]` to release commit message in `.versionrc.json`:
```json
"releaseCommitMessageFormat": "chore(release): {{currentTag}} [skip ci]"
```

## Configuration

The release process is configured in `.versionrc.json`. Key settings:

- **types**: Which commit types appear in changelog
- **commitUrlFormat**: Link format for commits
- **skip**: Control what gets generated
- **bumpFiles**: Files to update with new version

## GitHub Releases

After pushing tags, you can create GitHub releases manually or use GitHub Actions:

1. Go to: https://github.com/zy0x1337/aquaguide/releases/new
2. Select your tag
3. Copy relevant section from CHANGELOG.md
4. Publish release

## Best Practices

1. ✅ **Commit often** with descriptive conventional commits
2. ✅ **Run `release:dry`** before actual release to preview
3. ✅ **Review CHANGELOG.md** after generation
4. ✅ **Keep commit messages clear** - they become your release notes
5. ✅ **Use scopes** for better organization
6. ✅ **Test before releasing** - run `npm run build` and `npm run lint`
7. ❌ **Don't skip commits** - every change should be documented

## Complete Release Workflow

```bash
# 1. Make sure dependencies are installed
npm install

# 2. Make your changes and commit with conventional commits
git add .
git commit -m "feat: add new feature"

# 3. Test your changes
npm run build
npm run lint

# 4. Preview the release (optional)
npm run release:dry

# 5. Create the release
npm run release

# 6. Review the generated CHANGELOG.md
cat CHANGELOG.md

# 7. Push to GitHub
git push --follow-tags origin main
```

## Version History

- **v0.0.7** (Current) - Knowledge Hub, Homepage redesign
- **v0.0.6** - Mobile improvements, visualizations
- **v0.0.5** - Advanced filtering, search
- **v0.0.4** - Tank Builder, compatibility engine
- **v0.0.3** - 3D tank view, species expansion
- **v0.0.2** - UI improvements, loading states
- **v0.0.1** - Initial release

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [standard-version](https://github.com/conventional-changelog/standard-version)
- [Semantic Versioning](https://semver.org/)
