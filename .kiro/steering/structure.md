# Project Structure

## Root Directory
```
├── .kiro/                    # Kiro AI assistant configuration
├── .next/                    # Next.js build output (auto-generated)
├── node_modules/             # Dependencies (auto-generated)
├── public/                   # Static assets
├── src/                      # Source code
├── local_file/               # Local development files
├── package.json              # Project dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── components.json           # Shadcn/ui configuration
├── postcss.config.mjs        # PostCSS configuration
└── eslint.config.mjs         # ESLint configuration
```

## Source Code Organization (`src/`)

### App Directory (`src/app/`)
- **layout.tsx**: Root layout with theme provider and global styles
- **page.tsx**: Main homepage component composition
- **globals.css**: Global styles, theme variables, and utility classes
- **icon.svg**: App favicon

### Components (`src/components/`)
- **Section Components**: Individual page sections (hero, about, experience, etc.)
- **Layout Components**: Navigation, footer, theme toggle
- **UI Components** (`ui/`): Reusable Shadcn/ui components

### Library (`src/lib/`)
- **data.ts**: Centralized data store for portfolio content
- **utils.ts**: Utility functions (likely cn() for class merging)

## Key Conventions

### File Naming
- **kebab-case**: For component files (`hero-section.tsx`)
- **PascalCase**: For component exports (`HeroSection`)
- **camelCase**: For utility files and functions

### Import Patterns
- **Absolute imports**: Use `@/` alias for src directory
- **Named exports**: Prefer named exports over default exports for components
- **Barrel exports**: Group related exports when appropriate

### Component Structure
- **Client Components**: Use `'use client'` directive for interactive components
- **Server Components**: Default for static content
- **Props Interface**: Define TypeScript interfaces for component props
- **Composition**: Build pages by composing section components

### Styling Conventions
- **Tailwind Classes**: Use utility classes for styling
- **CSS Variables**: Custom properties for theme values
- **Component Variants**: Use class-variance-authority for component variations
- **Responsive Design**: Mobile-first approach with responsive utilities

### Data Management
- **Centralized Data**: Store portfolio content in `src/lib/data.ts`
- **Type Safety**: Define interfaces for data structures
- **Static Content**: Use static data for portfolio information

## Asset Organization

### Public Directory
- **Images**: Profile photos, project screenshots
- **Icons**: SVG icons and favicons
- **Static Files**: Any files served directly

### Local Files
- **Development Assets**: Temporary files, design mockups
- **Documentation**: Project-related documents