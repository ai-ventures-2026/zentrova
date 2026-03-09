# Zentrova – Enterprise SaaS Platform Website

A modern, dark-themed marketing website for **Zentrova**, a cutting-edge SaaS and tech platform brand. Built with React, Vite, and React Router.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM 6
- **Styling**: Component-scoped CSS (via `<style>` tags) + global CSS custom properties
- **Icons**: Inline SVG (no external dependencies)
- **Images**: None — all visuals are pure CSS and SVG

## Brand

| Token         | Value       | Usage                    |
|---------------|-------------|--------------------------|
| `--purple`    | `#6c3fff`   | Primary brand / CTA      |
| `--cyan`      | `#1affb2`   | Accent / success / data  |
| `--black`     | `#0d1117`   | Page background          |
| `--navy`      | `#16213e`   | Card / panel backgrounds |
| `--white`     | `#ffffff`   | Body text                |

## Pages

| Route        | Component            | Description                                      |
|--------------|----------------------|--------------------------------------------------|
| `/`          | `pages/Home.jsx`     | Hero, features, stats, pricing, testimonials     |
| `/about`     | `pages/About.jsx`    | Vision, values, leadership team, tech stack, milestones |
| `/services`  | `pages/Services.jsx` | Six platform service cards with detailed feature lists |
| `/contact`   | `pages/Contact.jsx`  | Sales form, enterprise contact, office locations |

## Project Structure

```
Zentrova/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css          # Global design tokens + utility classes
    ├── components/
    │   ├── Navbar.jsx     # Fixed nav with mobile drawer
    │   └── Footer.jsx     # Multi-column footer with status indicator
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        └── Contact.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Design Decisions

- **No external images**: All visuals use SVG and CSS
- **Dark theme**: Deep navy/near-black background with neon purple and cyan accents
- **Component-scoped styles**: Each component contains its own `<style>` block for isolation
- **Responsive**: All layouts adapt from desktop to mobile with CSS Grid and media queries
- **Accessible**: Semantic HTML, ARIA labels, and focus-visible styles throughout
- **Performance**: Zero third-party CSS or font dependencies; system font stack used
