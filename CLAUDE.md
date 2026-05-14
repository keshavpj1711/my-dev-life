# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal developer portfolio site for Keshav Prajapati — a React + Vite single-page app featuring 3D models (Three.js/React Three Fiber), GSAP scroll animations, and an EmailJS contact form. Deployed on Vercel.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5000
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build locally
```

## Architecture

**Single-page layout** — `src/App.jsx` composes all sections in order: `Navbar → Hero → ShowcaseSection → FeatureCards → Experience → TechStack → Contact`.

**Sections** (`src/sections/`) — each is a self-contained React component. Sections pull their data from `src/constants/index.js`, which is the single source of truth for all portfolio content (nav links, word carousel, abilities, tech stacks, journey timeline cards, social links).

**Components** (`src/components/`) — reusable UI primitives and 3D scene wrappers:
- `HeroModels/` — Three.js scene (room model, spaceman model, lighting) rendered via React Three Fiber
- `contact/` — Three.js computer model scene for the Contact section
- `GlowCard` — card with a CSS conic-gradient glow effect that follows mouse position (uses `--start` CSS variable)
- `AnimatedCounter`, `Button`, `TitleHeader`, `Navbar` — UI components

**Styling** — Tailwind CSS v4 (via `@tailwindcss/vite` plugin, not PostCSS). Custom design tokens and component classes are defined in `src/index.css` using `@theme` and `@layer components`. The `tailwind.config.js` has minimal config since v4 is configured inline in CSS.

**Animations** — GSAP with `@gsap/react` (`useGSAP` hook). Hero uses entry animations; Experience section uses `ScrollTrigger` to animate timeline cards and the gradient line on scroll.

**3D Models** — GLB files live in `public/models/`. Loaded with `@react-three/drei`'s `useGLTF`. The contact section uses `@react-three/postprocessing` for visual effects.

**Environment variables** — EmailJS credentials are required for the contact form. Copy `.env` values or set:
```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

## Key Conventions

- All portfolio content (text, images, journey cards, tech stacks) lives in `src/constants/index.js` — update that file to change displayed content, not the section components.
- Images are served from `public/images/`; tech stack logos from `public/images/logos/`.
- Section IDs (`#hero`, `#work`, `#experience`, `#skills`, `#contact`) are used by the Navbar for smooth scroll.
- Tailwind classes use custom color tokens: `text-white-50` (`#d9ecff`), `bg-black-50` (`#1c1c21`), `bg-black-100` (`#0e0e10`), `bg-black-200` (`#282732`), `text-blue-50` (`#839cb5`).
