# Nuxt Starter Template

A modern Nuxt.js starter template with pre-configured fonts, UnoCSS integration, and TypeScript support.

## Features

- 🚀 [Nuxt.js](https://nuxt.com/) - The Vue.js Framework
- 💨 [UnoCSS](https://unocss.dev/) - Instant On-demand Atomic CSS Engine
- 🔤 Custom Font Configuration
  - Display: Inter/Lagistha
  - Sans/Body: Poppins
  - Mono: Roboto/Roboto Mono
- 📝 TypeScript Support
- 🎨 Tailwind-compatible CSS Reset

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- [Bun](https://bun.sh/) (v1.0 or higher)

### Installation

1. Clone this template:


2. Navigate to the project:
```bash
cd my-project
```

3. Install dependencies:
```bash
bun install
```

4. Start the development server:
```bash
bun dev
```

Visit `http://localhost:3000` to see your application.

## Project Structure

Key directories and files:
- `/assets`: Contains your source assets (CSS, icons, images)
- `/public`: Static files served at root path
- `/public/fonts`: Pre-bundled font families including:
  - ClashDisplay (Variable + 6 weights)
  - Poppins (Variable + 9 weights + italics)
  - Roboto Mono (6 weights + italics)
  - Additional custom fonts
- Configuration files:
  - `app.config.ts`: Application-specific configuration
  - `nuxt.config.ts`: Nuxt.js configuration
  - `theme.config.ts`: Theme settings including fonts
  - `uno.config.ts`: UnoCSS configuration
  - `biome.json`: Biome toolchain settings
