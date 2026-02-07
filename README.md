# Eduvora Website

A modern, responsive React.js website showcasing the Eduvora Smart Academic Portal project.

## 🚀 About

This website provides comprehensive information about Eduvora, a cutting-edge Smart Academic Portal designed for students, teachers, and HODs. Built with React, TypeScript, and Tailwind CSS, it features:

- **Hero Section**: Eye-catching introduction with key metrics
- **About Section**: Detailed project overview and timeline
- **Features Showcase**: 12+ major features with descriptions
- **User Roles**: Tailored experiences for Students, Teachers, and HODs
- **Release History**: Complete version history (v1.3.0 & v1.4.0)
- **Tech Stack**: Comprehensive technology breakdown
- **Responsive Design**: Optimized for all devices
- **Modern Animations**: Smooth transitions and effects

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🏃‍♂️ Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
eduvora-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── UserRoles.tsx
│   │   ├── Releases.tsx
│   │   ├── TechStack.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## ✨ Features

- **Smooth Scrolling**: Navigate sections seamlessly
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Mode Ready**: (Can be easily implemented)
- **Performance Optimized**: Fast loading and rendering
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design

## 🎨 Customization

### Colors

Primary colors are defined in `tailwind.config.js`:

```js
colors: {
  primary: '#4F46E5',
  secondary: '#06B6D4',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
}
```

### Content

All content is in the component files under `src/components/`. Edit these files to update information.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

Recommended hosting platforms:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 License

This project is part of the Eduvora Smart Academic Portal ecosystem.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Eduvora** - Smart Academic Portal
Version 1.4.0 | February 7, 2026
