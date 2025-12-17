# Raj Hills Construction

## Technologies & Libraries

**Language & Runtime:**

- TypeScript 5.9.3
- JavaScript (ES2017)

**Framework & UI:**

- Next.js 16.0.10
- React 19.2.1
- React DOM 19.2.1

**Styling:**

- Tailwind CSS 4.1.18
- PostCSS 4

**Development & Tooling:**

- Node.js
- ESLint 9
- TypeScript compiler

## Project Overview

Raj Hills Construction is a Next.js-based web application that appears to be a construction company website in early development stages. The project structure indicates components for various website sections (hero, services, projects, about, contact, gallery) and company/project data management. However, most component files are currently empty, and the application displays default Next.js boilerplate content. The project remains incomplete with placeholder data structures.

## Repository Structure

```
raj-hills-construction/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page (currently boilerplate)
│   └── globals.css               # Global styles
├── src/
│   ├── components/
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx        # Navigation bar (empty)
│   │   │   └── Footer.tsx        # Footer component (empty)
│   │   ├── sections/             # Page section components
│   │   │   ├── Hero.tsx          # Hero section (empty)
│   │   │   ├── Services.tsx      # Services section (empty)
│   │   │   ├── Projects.tsx      # Projects section (empty)
│   │   │   ├── About.tsx         # About section (empty)
│   │   │   ├── Contact.tsx       # Contact section (empty)
│   │   │   └── Gallery.tsx       # Gallery section (empty)
│   │   └── utils/                # Utility functions
│   │       └── scrollToSection.ts # Scroll utility (empty)
│   └── data/
│       ├── Componey.ts           # Company data (empty)
│       └── Projects.ts           # Projects data (empty)
├── public/                       # Static assets
│   ├── images/                   # Image assets
│   └── videos/                   # Video assets
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── eslint.config.mjs             # ESLint configuration
```

## Features / Implementations

- Next.js 16 application with App Router architecture
- TypeScript support with strict type checking enabled
- Component structure prepared for:
  - Navigation bar
  - Multiple page sections (hero, services, projects, about, contact, gallery)
  - Footer
- Tailwind CSS styling framework integrated
- Responsive design setup via utility classes
- Font loading (Geist sans and monospace from Google Fonts)
- ESLint linting configured

## Setup & Requirements

**Prerequisites:**

- Node.js (version compatible with Next.js 16.0.10)
- npm or similar package manager

**Installation:**

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Usage

**Development Server:**

```
npm run dev
```

Starts the development server at `http://localhost:3000`

**Production Build:**

```
npm run build
```

Compiles the application for production deployment.

**Start Production Server:**

```
npm start
```

Runs the production-optimized application.

**Linting:**

```
npm run lint
```

Executes ESLint to check code quality.

## Scope & Intent

This repository is in **early development/experimentation** stages. It is intended as the foundation for a construction company website but remains incomplete. Most functional components are placeholder files without implementations.

## Limitations

- **Incomplete Implementation:** Most React components (Navbar, Footer, all section components) are empty stubs.
- **Empty Data Files:** Company and projects data structures lack content.
- **Boilerplate Content:** The homepage still displays default Next.js template text.
- **No Tests:** No testing framework or test files present.
- **Static Configuration:** Server-side rendering, API routes, and dynamic content features are not yet implemented.
- **Missing Metadata:** The root layout contains generic "Create Next App" metadata without project-specific information.
- **Utility Functions Empty:** The scroll-to-section utility is not yet implemented.

## Contributing

Contributions are welcome. Please ensure changes follow the existing TypeScript and ESLint configurations, maintain component structure conventions, and include necessary implementations for stub components and data files.

## License

No license file is present in this repository. The license for this project is not specified.
