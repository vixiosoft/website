---
name: cynigen-project-guide
description: Use when building, refactoring, or planning any features, pages, or components for the Cynigen software company website project.
---

# Cynigen Website Project Guide & Roadmap

This documentation serves as the single source of truth for the Cynigen software company website project. It contains details about the company, target aesthetics, development phases, and technical guidelines.

---

## 1. Project Overview & Aesthetics

Cynigen is a software company website designed to be **minimal, focused, and elegant**. 

### Design Principles
- **Minimalism**: Clean layouts, generous whitespace, and purposeful content placement. No clutter.
- **Modern Elegance**: Smooth micro-animations, glassmorphism UI elements, dark mode support, and curated typography.
- **UX Excellence**: Intuitive navigation, clear call-to-actions (CTAs), and responsive mobile-first design.
- **Premium Feel**: High-quality visuals, professional color palettes (e.g., slate/indigo/violet accents), and smooth scroll behavior.

### Technology Stack
- **Framework**: Next.js 16 (App Router, TypeScript, React 19).
- **Styling**: Tailwind CSS v4 (with custom utilities and variables).
- **Animations**: Framer Motion (for entrance transitions, hover effects, and scroll triggers).
- **Smooth Scroll**: Lenis (integrated globally for smooth trackpad and mouse wheel scrolling).
- **Components**: Shadcn UI (accessible, unstyled primitives styled with custom classes).

---

## 2. Project Phases & Roadmap

This project is built in sequential phases. Refer to these phases when planning implementation or building new routes:

### Phase 1: Core Layout & Home Intro
- **[Navbar](file:///e:/Web/cynigen/components/shared/Navbar.tsx)**: Sticky/floating modern navigation bar with glassmorphic background, logo, links, and action button.
- **[Footer](file:///e:/Web/cynigen/components/shared/Footer.tsx)**: Multi-column clean footer with logo, links, contact info, newsletter input, and social icons.
- **[Hero Section](file:///e:/Web/cynigen/components/pages/home/Hero.tsx)**: Immersive, visually stunning introduction with a compelling heading, sub-headline, primary/secondary CTAs, and dynamic Framer Motion animations.

### Phase 2: Home Page Content Sections
- **Clients/Partners**: Clean logo grid showcasing trusted brands or partners.
- **Featured Projects**: Showcase card grid of selected flagship projects with hover animations.
- **Works/Services**: Section highlighting key capabilities (e.g., Custom Development, UI/UX Design, Cloud Consulting).
- **Testimonials**: Elegant slider or grid featuring client reviews and ratings.
- **Pricing**: Minimal comparison tables or cards showing service packages.
- **Quick Contact**: Minimal form/section on the home page directing users to get in touch.

### Phase 3: Projects Portfolio
- **Projects Page (`/projects`)**: Filterable grid displaying all past and current projects.
- **Project Details Page (`/projects/[slug]`)**: Dynamic detail page for each project featuring screenshots, case studies, technologies used, and client outcomes.

### Phase 4: Works & Services
- **Works Page (`/works`)**: Detailed catalog page for services, methodology, and processes.
- **Works Details Page (`/works/[slug]`)**: Deep dive into specific service offerings, including deliverables, timelines, and case studies.

### Phase 5: About Us (`/about`)
- Company story, mission, core values, and an interactive/elegant team member grid.

### Phase 6: Contact Us (`/contact`)
- Dedicated page with a functional email/contact form, map integration, FAQ accordion, and direct contact details.

### Phase 7: Legal Pages
- **Privacy Policy (`/privacy`)**: Legal statement on data collection, privacy, and cookies.
- **Terms & Conditions (`/terms`)**: Standard company terms of service.

*Note: New features and phases will be appended as the project evolves.*

---

## 3. Directory Structure Reference

Follow this established directory layout when creating new modules:
- `/app` - Routing and page layouts (App Router).
  - `/app/layout.tsx` - Root layout (Lenis wrapper, Theme Provider, Global Font).
  - `/app/page.tsx` - Home page assembling Phase 1 & Phase 2 sections.
  - `/app/globals.css` - Global styling, custom Tailwind v4 layers, and CSS variables.
- `/components` - Reusable UI elements.
  - `/components/ui` - Shadcn primitives.
  - `/components/shared` - Navbar, Footer, and other global layout components.
  - `/components/pages` - Page-specific components (e.g., `/components/pages/home/Hero.tsx`).
- `/constants` - Navigation links, pricing data, testimonials, and static configuration.
- `/hooks` - Custom React hooks (e.g., scroll tracking, theme management).
- `/lib` - Utility functions (e.g., `cn` helper).

---

## 4. Development Best Practices

1. **Next.js conventions**: 
   - Follow Next.js 16 standards. Refer to `node_modules/next/dist/docs/` for details.
   - Use Server Components by default; add `"use client"` only when interactive elements, state, or hooks (Framer Motion, Lenis) are required.
2. **SEO Guidelines**:
   - Ensure every page includes a proper title and descriptive meta tags.
   - Use standard HTML5 semantic elements (`<header>`, `<main>`, `<footer>`, `<section>`).
   - Every interactive element (inputs, buttons, links) must have unique, descriptive IDs.
3. **Animations (Framer Motion)**:
   - Avoid aggressive or jarring animations. Keep transitions smooth, subtle, and under 0.5s.
   - Ensure scroll animations do not layout-shift or cause performance lag.
4. **Clean Code**:
   - Keep files small, modular, and focused.
   - Run verification checks (`npm run typecheck` & `npm run build`) after implementing any new phase.
