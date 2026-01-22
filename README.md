# Keith Kwok - Personal Portfolio

A modern, animated personal portfolio website built with Next.js 16, Tailwind CSS 4, and Framer Motion.

## Features

- **Dark Purple Theme** - Elegant dark mode with purple accent colors
- **Rich Animations** - Scroll reveal, hover effects, particle background, typewriter effect
- **Responsive Design** - Mobile-first design with hamburger menu for mobile devices
- **Multi-page Structure** - Separate pages for About, Experience, Skills, Certifications, and Contact
- **Static Export** - Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Particles**: tsparticles
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter, JetBrains Mono

## Pages

| Page | Description |
|------|-------------|
| `/` | Hero section with typewriter effect and particle background |
| `/about` | Personal profile card, summary, education, and certifications preview |
| `/experience` | Interactive timeline with expandable job cards |
| `/skills` | Categorized skills grid with progress animations |
| `/certifications` | Certification cards grouped by year |
| `/contact` | Contact information with copy-to-clipboard and contact form |

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Enable GitHub Pages in your repository settings (Settings > Pages > Source: GitHub Actions)

### Manual Build

```bash
yarn build
```

The static files will be generated in the `out/` directory.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home/Hero page
│   ├── globals.css         # Global styles and CSS variables
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   ├── certifications/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navigation.tsx      # Responsive navigation
│   ├── Footer.tsx
│   ├── AnimatedSection.tsx # Scroll animation wrapper
│   ├── ParticleBackground.tsx
│   ├── TypewriterText.tsx
│   ├── GlowButton.tsx
│   ├── PageWrapper.tsx
│   └── SectionHeader.tsx
├── lib/
│   └── data.ts             # Resume data
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0f` | Primary background |
| Background Secondary | `#13131a` | Cards and sections |
| Purple 500 | `#a855f7` | Primary accent |
| Purple 400 | `#c084fc` | Light accent |
| Fuchsia 400 | `#e879f9` | Gradient accent |
| Text Primary | `#f5f5f7` | Main text |
| Text Secondary | `#a1a1aa` | Muted text |

## License

MIT
