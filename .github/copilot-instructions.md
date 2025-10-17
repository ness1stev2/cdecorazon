# C de Corazón - AI Coding Agent Instructions

## Project Overview
C de Corazón is an Angular 17 SSR application for support groups (Alcohólicos Anónimos/Al-Anon) in Guadalajara, Mexico. The app showcases group information, locations, self-assessments, and resources.

## Architecture & Patterns

### Standalone Components Architecture
- **All components are standalone** - use `standalone: true` and explicit `imports: []` arrays
- **No NgModules** - import components directly where needed
- **Lazy loading via dynamic imports**: `loadComponent: () => import('./path/component').then(m => m.ComponentName)`

### Key Structural Patterns

#### 1. Route-Based Organization
```
src/app/cdecorazon/
├── components/          # Reusable UI components
├── pages/              # Route-level page components
│   ├── info-grupo/     # Dynamic group info pages
│   ├── encontrarnos/   # Group directory
│   └── [feature]/      # Feature-specific pages
└── services/           # Application services
```

#### 2. Group Information System
- **Central data model**: `src/app/cdecorazon/pages/info-grupo/models/grupo-info.model.ts`
- **Dynamic routing**: `/info-grupo/:nombreGrupo` loads group data from `GRUPOS_INFO` record
- **Legacy route compatibility**: Old routes redirect to new unified pattern
- **Shared components**: `card-fotos`, `card-rutas-camion`, `info-grupo` are reused across group pages

#### 3. Component Composition Pattern
Group info pages follow this structure:
```typescript
@Component({
  imports: [CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent]
})
```

## Development Workflow

### Commands
- **Start dev server**: `npm start` (binds to 0.0.0.0 for network access)
- **Build**: `npm run build`
- **SSR serve**: `npm run serve:ssr:cdecorazon`
- **Watch mode**: `npm run watch`

### Key Technologies
- **Angular 17** with new control flow syntax (`@if`, `@for`, `@defer`)
- **Tailwind CSS** for styling (configured in `tailwind.config.js`)
- **Angular SSR** with Express server (`server.ts`)
- **Standalone components** exclusively

## Project-Specific Conventions

### 1. Styling Approach
- **Tailwind-first**: Use utility classes extensively
- **Responsive design**: Mobile-first with `md:`, `lg:` breakpoints
- **Component-scoped animations**: Custom keyframes in component styles
- **Color scheme**: Primary `#f0565d` (red), secondary `#3b383b` (dark gray)

### 2. Component Input Patterns
- **Angular signals**: Use `input<T>()` for new components
- **Traditional @Input**: Legacy components still use `@Input() prop: type`
- **Change detection**: Most components use `OnPush` strategy

### 3. Route Configuration
- **Explicit titles**: Each route has a `title` property
- **Lazy loading**: All page components are dynamically imported
- **Compatibility redirects**: Maintain old URL patterns for SEO

### 4. Asset Organization
```
assets/
├── grupos/             # Group-specific images organized by folder
│   ├── [grupo-name]/   # Individual group photo galleries
│   └── [logo].png      # Group logos
├── icon/              # SVG icons and logos
└── img/               # General images
```

## Critical Integration Points

### 1. SafeResourceUrlPipe
- **Purpose**: Sanitizes iframe src URLs for Google Maps embeds
- **Usage**: `[src]="url | safeResourceUrl"`
- **Location**: `src/app/shared/pipes/safe-url.pipe.ts`

### 2. ScrollTopService
- **Auto-initialization**: Injected in main component, runs automatically  
- **Functionality**: Scrolls to top on route changes
- **Implementation**: Listens to `NavigationEnd` events

### 3. Photo Gallery System
- **Modal gallery**: `card-fotos` component has click-to-open functionality
- **Keyboard navigation**: Arrow keys, Escape, Home/End
- **Responsive thumbnails**: Different layouts based on image count

## Data Management Patterns

### 1. Static Data Approach
- **Group information**: Centralized in `GRUPOS_INFO` constant
- **Type safety**: `GrupoInfo` interface defines structure
- **Asset paths**: Hardcoded relative paths to images

### 2. Route Parameter Handling
```typescript
// Standard pattern for route-dependent components
this.route.paramMap.subscribe(params => {
  this.grupoId = params.get('nombreGrupo') || 'default';
  this.loadGroupInfo();
});
```

## Common Anti-Patterns to Avoid

1. **Don't create NgModules** - This project uses standalone components exclusively
2. **Don't use old control flow** - Use `@if`/`@for` instead of `*ngIf`/`*ngFor`
3. **Avoid direct DOM manipulation** - Use Angular's declarative approach
4. **Don't hardcode URLs** - Use RouterLink for internal navigation

## Testing & Debugging

- **Angular DevTools**: Essential for debugging standalone component tree
- **Network access**: Dev server binds to `0.0.0.0` for mobile testing
- **SSR considerations**: Test both client and server rendering paths

When working on this codebase, prioritize consistency with existing patterns, especially the standalone component architecture and Tailwind-first styling approach.
