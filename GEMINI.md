# AuraCare (Aura Wellness) Project Instructions

## 1. Core Tech Stack & Versions
- **Framework:** Next.js 16.2.4 (App Router)
- **Library:** React 19.2.4
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x (using `@import "tailwindcss";` and `@theme` block)
- **Animations:** Framer Motion 12.38.0
- **Icons:** Material Symbols Outlined (via Google Fonts)

> **CRITICAL:** This project uses Next.js 16. Refer to `AGENTS.md`. APIs and conventions may differ from training data. Consult `node_modules/next/dist/docs/` for authoritative documentation.

## 2. Design System & Aesthetics

### 2.1 Color Palette (Material Design 3 Inspired)
The project uses a sophisticated, semantic color system defined in `app/globals.css`. Always prefer these semantic variables over hex codes:
- **Primary:** `--color-primary` (#6c5e06), `--color-on-primary` (#ffffff), `--color-primary-container` (#c5b358).
- **Secondary:** `--color-secondary` (#596151), `--color-on-secondary` (#ffffff).
- **Tertiary:** `--color-tertiary` (#8e4c41), `--color-tertiary-container` (#f09d8f).
- **Surface System:**
    - `bg-surface`: Main background (#fbf9f8).
    - `bg-surface-container-lowest`: Pure white (#ffffff).
    - `bg-surface-container-low`, `-high`, `-highest`: Varied depths for cards and sections.
    - `text-on-surface`: Default text (#1b1c1c).
    - `text-on-surface-variant`: Muted text/labels (#4b4738).
- **Utility:** `--color-outline` (#7c7766), `--color-outline-variant` (#cdc6b3).

### 2.2 Typography
- **Headline Font (`--font-headline`):** `Noto Serif`. Used for an editorial, luxury feel.
    - Class: `font-headline`
    - Usage: H1, H2, H3, and serif-style links.
- **Body Font (`--font-body`):** `Inter`. Used for readability.
    - Class: `font-body`
    - Usage: Paragraphs, descriptions.
- **Label Font (`--font-label`):** `Inter`.
    - Class: `font-label`
    - Usage: Buttons, small caps tracking, form labels.

### 2.3 Iconography
- Uses **Material Symbols Outlined**.
- Implementation: `<span className="material-symbols-outlined">icon_name</span>`.
- Default configuration: `FILL 0, wght 400, GRAD 0, opsz 24` (defined in `globals.css`).
- Use `style={{ fontVariationSettings: "'FILL' 1" }}` for active/filled states.

## 3. Architectural Patterns

### 3.1 Component Strategy
- **Client Components:** Must include `"use client";`. Used for anything with `framer-motion`, `useState`, `useEffect`, or scroll listeners.
- **Layouts:**
    - `app/layout.tsx`: Global structure, font injection, and permanent UI (TopAppBar, BottomNavBar, Footer).
    - Navigation components handle their own responsive visibility (`md:hidden` vs `hidden md:flex`).
- **Path Aliases:** Use `@/*` for all internal imports (e.g., `@/components/TopAppBar`).

### 3.2 Navigation & Routing
- Use `next/link` for all internal transitions.
- **Active States:** Determined via `usePathname()` hook.
- **Header Behavior:** `TopAppBar` implements a scroll-aware transition (transparent to blurred surface) using a 20px threshold.

### 3.3 Assets & Images
- **Next Image:** Always use `next/image`.
- **Remote Patterns:** Currently configured for `lh3.googleusercontent.com` (Google Photos/Cloud Storage).

## 4. Animation Guidelines (Framer Motion)

### 4.1 Global Easing
- Use the "Luxury Easing": `[0.16, 1, 0.3, 1]` for almost all transitions (headers, nav, entrances).

### 4.2 Standard Variants
Found in `app/page.tsx`, these should be reused for consistency:
- **`fadeInUp`:** `{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }`
- **`staggerContainer`:** `{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }`

### 4.3 Interaction
- **Hover:** `whileHover={{ scale: 1.05 }}` or `scale: 1.1` for icons.
- **Tap:** `whileTap={{ scale: 0.95 }}` or `scale: 0.9` for icons.

## 5. Development Workflow
- **Linting:** `npm run lint` (uses `eslint-config-next`).
- **Type Checking:** Project is strict TypeScript.
- **Styling:** Tailwind 4 does not require a `tailwind.config.js`. Everything is handled via CSS variables in `app/globals.css`.

## 6. Directory Structure
- `app/`: Routes and Page components.
    - `portal/`: Account and profile.
    - `schedule/`: Booking.
    - `store/`: Services and products.
- `components/`: Shared UI components.
- `public/`: Static assets.
