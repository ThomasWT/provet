# Provet Cloud Health Plans - Portfolio Project

A modern web application showcasing the implementation of Provet Cloud's design system and components in a Nuxt.js 3 environment. This project demonstrates the integration of Provet Cloud's web components, themes, and design principles in a production-ready application.

## Project Overview

This portfolio project implements a signup page using Provet Cloud's design system and components. It serves as a demonstration of:

- Seamless integration with Provet Cloud's design system
- Implementation of Provet Cloud web components in a Nuxt 3/Vue.js environment
- Internationalization support for multiple markets

## Key Technical Implementations

- **Design System Integration:**
  - Direct implementation of `@provetcloud/css` and `@provetcloud/themes`
  - Custom element registration for Provet Cloud web components

- **Internationalization:**
  - Multi-language support (English and Finnish)
  - Language-specific assets and content

## Tech Stack

- **Framework:** Nuxt.js 3
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Deployment:** Vercel
- **Styling:** 
  - Provet Cloud CSS
  - Provet Cloud Themes
  - Custom CSS
- **Components:** Provet Cloud Web Components
- **Icons:** Nord Health Icons

## Features

- 🌐 Multi-language support (English and Finnish)
- 🎨 Provet Cloud's design system
- ⚡ Fast client-side rendering
- 🧪 Testing utilities integration

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:ThomasWT/provet.git
cd provetcloud
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
pnpm build
```

## Project Structure

```
├── assets/          # Static assets
├── components/      # Vue components
├── composables/     # Vue composables
├── i18n/           # Internationalization files
├── layouts/        # Page layouts
├── pages/          # Application pages
├── public/         # Public static files
└── server/         # Server-side code
```

## Development

- The project uses TypeScript for type safety
- Web components are supported through custom element registration
- Development tools are enabled for better debugging
- Testing utilities are available through @nuxt/test-utils

## Deployment

The application is configured for deployment on Vercel. The build process is automatically handled through the Vercel platform.
