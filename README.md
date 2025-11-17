# AI Agent Landing Page

A production-ready, modern landing page for an AI Agent creation platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light theme support
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🚀 Production-ready code
- ⚡ Fast performance with Next.js App Router

## Sections

1. **Hero** - Compelling headline with animated illustration
2. **How It Works** - 4-step process flow
3. **Features** - 8 key features in a grid layout
4. **Live Demo** - Interactive chat preview with embed code
5. **Use Cases** - 5 business use cases
6. **Testimonials** - Customer testimonials
7. **Pricing** - Three-tier pricing structure
8. **Footer** - Links and theme toggle

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ai-agent-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── LiveDemo.tsx
│   │   ├── UseCases.tsx
│   │   ├── Testimonials.tsx
│   │   └── Pricing.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── lib/
│   └── utils.ts
└── public/
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the primary color scheme
- **Content**: Update text and data in each component file
- **Theme**: Modify `components/ThemeProvider.tsx` for theme behavior
- **Animations**: Adjust Framer Motion animations in component files

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React** - UI library

## License

MIT

