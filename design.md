# Renomedy Design System & Guidelines

## 1. Core Principles

Renomedy is built around a "Family-First" and "Privacy-First" approach, designed specifically for Indian families managing chronic care. The design should convey trust, clarity, safety, and modern simplicity.

- **Trust & Security:** As a healthcare app, it needs to look secure and reliable. We use bank-level encryption themes, lock icons, and shield motifs.
- **Clarity:** It should translate confusing handwritten prescriptions into clear, digestible digital formats. Generous white space and clear typography are essential.
- **Warmth:** It's for families, not just clinical environments. Warm, soft colors (like rose and orange) are used alongside clinical tones (teal and blue).
- **Simplicity:** The interface should feel intuitive and light, specifically avoiding the cluttered feel of traditional pharmacy marketplaces.

## 2. Color Palette

The color system uses `oklch` for smooth, perceptually uniform color gradients. It relies on a clinical yet approachable palette.

### Backgrounds & Surfaces
- **Background:** `oklch(0.992 0.004 180)` (Very light blue-grey/white)
- **Foreground:** `oklch(0.22 0.03 200)` (Dark blue/slate for text)
- **Surface / Card:** `oklch(1 0 0)` (Pure white)
- **Surface Elevated:** `oklch(0.985 0.008 180)` (Slightly tinted white)

### Core Accents
- **Primary (Healthcare Teal/Emerald):** `oklch(0.52 0.09 185)` — Used for main CTAs, highlights, and primary icons.
- **Primary Soft:** `oklch(0.93 0.04 180)` — Used for pill backgrounds and soft highlights.
- **Primary Deep:** `oklch(0.36 0.07 190)` — Used for hover states and emphasized text.

### Functional Accents
- **Secondary / Muted:** Soft grey/blue tones for borders and subtle text.
- **Mint:** `oklch(0.88 0.06 170)` — Used for supportive success/active states.
- **Destructive / Error:** `oklch(0.60 0.20 25)` — Used for warnings (e.g., missed doses).

### Contextual Colors (Used in Features/Cards)
- **Blue, Emerald, Violet, Orange, Rose, Teal:** Used in feature blocks and family member avatars to create distinction and a sense of a diverse family unit.

## 3. Typography

The typography is modern, clean, and highly legible.

- **Display Font:** `"Plus Jakarta Sans"`
  - Used for Headers (`h1`, `h2`, `h3`, `h4`).
  - Characteristics: Slightly tight letter-spacing (`-0.02em`), bold weights (600, 700, 800) for high impact and modern feel.
- **Sans/Body Font:** `"Inter"`
  - Used for body text, small copy, buttons, and UI elements.
  - Characteristics: Highly readable, neutral, excellent for complex UI data.

## 4. Visual Styles & Layout Paradigms

### Border Radius
- The design heavily favors rounded corners to feel soft and approachable.
- Primary radius base is `0.875rem` (`var(--radius)`).
- Cards and main sections use large rounded corners (e.g., `rounded-2xl`, `rounded-3xl`, `rounded-[2.75rem]` for the phone mockup).

### Shadows
- Soft, diffused shadows are preferred over harsh drops.
- **`shadow-soft`**: Subtle elevation for standard cards.
- **`shadow-elevated`**: For floating elements or important feature blocks.
- **`shadow-phone`**: A specific, realistic shadow for device mockups.

### Gradients & Backgrounds
- Gradients are used subtly in backgrounds to add depth.
- Example: Radial gradients in the `body` background and linear gradients (`bg-gradient-to-br`) in pricing cards or call-to-action sections to draw attention without being overwhelming.
- **Gradient Text:** Used sparingly for emphasis (e.g., on the hero section).

### Layout
- **Container:** Max-width of `6xl` (approx 1152px) with horizontal padding (`px-6`).
- **Spacing:** Generous vertical padding between sections (`py-16 sm:py-20 lg:py-24`).
- **Grid Systems:** Heavy use of CSS grids (`grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`) for feature lists, pricing, and side-by-side hero layouts.

## 5. Key Components

### Phone Mockup (`PhoneMockup.tsx`)
- Acts as the central visual anchor showing the app in action.
- Features a realistic device frame with a notch.
- Internal UI demonstrates the core value: family members (colored avatars), schedule tracking (pill containers), and scan actions. It highlights the "Family Health" summary and "Refill Continuity".

### Waitlist Form (`WaitlistForm.tsx`)
- Simple, high-conversion design.
- Inline form on desktop, stacking on mobile.
- Uses `sonner` for toast notifications.
- Success state replaces the form with a reassuring message and queue position, reinforcing the "exclusive early access" feel.

### Feature Cards
- Use soft backgrounds (e.g., `bg-surface/50`), borders, and hover states that slightly elevate the card (`hover:shadow-soft`, `hover:border-primary/30`).
- Icons are placed in colored, rounded squares for visual hierarchy.

## 6. Iconography
- Relies on **Lucide React** for consistent, clean, outline-style icons.
- Common icons: `CheckCircle` (success/trust), `Shield` (privacy), `Brain` (AI), `Users` (family).
