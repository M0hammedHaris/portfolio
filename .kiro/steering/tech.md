# Technology Stack

## Framework & Runtime
- **Next.js 16.1.1**: React framework with App Router
- **React 19.2.3**: UI library with latest features
- **TypeScript 5**: Type-safe JavaScript development
- **Node.js**: Runtime environment

## Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework with custom theme
- **Shadcn/ui**: Component library with Radix UI primitives
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library
- **next-themes**: Dark/light theme management

## Key Dependencies
- **@radix-ui/***: Accessible UI primitives (dialog, dropdown, scroll-area, etc.)
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **pdf-parse**: PDF processing capability

## Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS processing
- **TypeScript**: Static type checking

## Common Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Package Management
```bash
npm install          # Install dependencies
npm ci              # Clean install from package-lock.json
```

## Build Configuration

- **TypeScript Config**: Strict mode enabled, path aliases configured (`@/*` → `./src/*`)
- **Next.js Config**: Minimal configuration, uses default optimizations
- **ESLint**: Next.js recommended configuration
- **Tailwind**: Custom theme with CSS variables for theming

## Architecture Patterns

- **App Router**: Uses Next.js 13+ app directory structure
- **Component-Based**: Modular React components with clear separation
- **Theme System**: CSS custom properties for light/dark mode
- **Type Safety**: Full TypeScript coverage with strict configuration

## Development Best Practices

### Code Quality
- **TypeScript First**: Always use TypeScript interfaces and types
- **Strict Mode**: Keep TypeScript strict mode enabled
- **ESLint Rules**: Follow Next.js ESLint configuration
- **Component Props**: Define explicit interfaces for all component props
- **Error Boundaries**: Implement error boundaries for production resilience

### Performance Guidelines
- **Server Components**: Use server components by default, add 'use client' only when needed
- **Image Optimization**: Use Next.js Image component for all images
- **Bundle Analysis**: Run `npm run build` to check bundle sizes
- **Lazy Loading**: Implement dynamic imports for heavy components
- **Memoization**: Use React.memo, useMemo, useCallback appropriately

### Accessibility Standards
- **Semantic HTML**: Use proper HTML elements (nav, main, section, article)
- **ARIA Labels**: Add aria-labels for interactive elements
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Color Contrast**: Maintain WCAG AA contrast ratios
- **Focus Management**: Implement proper focus indicators and management

### Styling Best Practices
- **Mobile First**: Design for mobile, then enhance for desktop
- **Consistent Spacing**: Use Tailwind's spacing scale consistently
- **Theme Variables**: Use CSS custom properties for theme-dependent values
- **Component Variants**: Use class-variance-authority for component variations
- **Responsive Design**: Test on multiple screen sizes and devices

### Security Considerations
- **Input Validation**: Validate all user inputs
- **XSS Prevention**: Sanitize any dynamic content
- **HTTPS Only**: Ensure all external links use HTTPS
- **Content Security Policy**: Implement CSP headers in production
- **Environment Variables**: Never expose sensitive data in client-side code