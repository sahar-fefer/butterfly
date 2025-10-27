# Butterfly - הפרפרים של עומר

A memorial website dedicated to Omer, built with Gatsby and TypeScript. This project honors Omer's memory by supporting two charitable organizations established in her name.

## About the Project

Omer traveled on a journey with many dreams and the innocence that everything is possible - she was killed in Nepal. In her 21 years of life, she managed to touch the hearts of many people in her authentic and special way. She knew how to give space to every person, and when she looked at you, you knew she was with you. To commemorate Omer's memory, two organizations were established.

**Live Site:** [https://sahar-fefer.github.io/butterfly/](https://sahar-fefer.github.io/butterfly/)

## Features

- **Hebrew RTL Support** - Fully responsive Hebrew interface
- **Multiple Pages:**
  - Home page with main banner and call-to-actions
  - About page (הפרפרים של עומר & הבית של עומר)
  - Bracelets section
  - Contact form
  - Donation page
  - FAQ section
- **Interactive Components:**
  - Cards carousel with Swiper
  - Accordion FAQ
  - Gallery grid
  - Contact form with validation
  - Responsive navigation
- **Optimized Images** - Using Gatsby Image plugin for performance
- **WhatsApp Integration** - Quick contact option

## Tech Stack

- **Framework:** Gatsby 5.15.0
- **Language:** TypeScript
- **Styling:** SASS/SCSS
- **UI Components:**
  - Swiper for carousels
  - Custom React components
- **Image Optimization:** gatsby-plugin-image, gatsby-plugin-sharp
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahar-fefer/butterfly.git
   cd butterfly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run develop
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Available Scripts

- `npm run develop` - Start the development server
- `npm run start` - Alias for develop
- `npm run build` - Build the production site
- `npm run serve` - Serve the production build locally
- `npm run clean` - Clean Gatsby cache and public folder
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Build and deploy to GitHub Pages

## Project Structure

```
butterfly/
├── src/
│   ├── assets/
│   │   └── images/        # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── accordion/
│   │   ├── banners/
│   │   ├── button/
│   │   ├── cardsCarousel/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── footer/
│   │   ├── galleryGrid/
│   │   ├── nav/
│   │   └── layout.tsx
│   ├── pages/             # Page components (routes)
│   │   ├── index.tsx
│   │   ├── about/
│   │   ├── bracelets/
│   │   ├── contact/
│   │   ├── donate/
│   │   ├── omers-butterflies/
│   │   └── omers-house/
│   ├── styles/            # SCSS stylesheets
│   └── svg.tsx            # SVG components
├── gatsby-config.ts       # Gatsby configuration
├── package.json
└── tsconfig.json
```

## Deployment

The site is deployed to GitHub Pages. To deploy:

```bash
npm run deploy
```

This will build the site with the path prefix and deploy to the `gh-pages` branch.

## Contributing

This is a memorial project. If you'd like to contribute or suggest improvements, please reach out through the contact form on the website.

## Author

**Sahar**

## License

Private project - All rights reserved

---

*Built with ❤️ in memory of Omer*
