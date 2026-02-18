# Ghulam Mustafa Keerio - Portfolio Website

🚀 Modern, responsive portfolio website showcasing ML engineering expertise and innovative projects.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🌟 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 💅 **Tailwind CSS** for beautiful, responsive styling
- 🎨 **Dark/Light Mode** with smooth transitions
- 📱 **Fully Responsive** - works on all devices
- 🎭 **Framer Motion** animations for engaging UX
- 📊 **Project Showcases** with filtering capabilities
- 📬 **Contact Form** with validation
- 🔍 **SEO Optimized** with proper metadata
- ♿ **Accessible** with ARIA labels

## 🎯 Highlights

- **91.3% Accuracy** - Audio Emotion Recognition (RAVDESS)
- **86.9% Accuracy** - Speech Emotion Recognition
- **95%+ Accuracy** - AI Plagiarism Detection
- **9 Professional Projects** - Comprehensive documentation

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes

### Key Features
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Automatic Code Splitting
- Image Optimization
- Font Optimization

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
# Clone repository
git clone https://github.com/Ghulam-Mustafa-Keerio/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

Your portfolio will be live at: `https://your-project.vercel.app`

### Alternative Deployment Options

- **GitHub Pages**: Use `next export` for static export
- **Netlify**: Connect your GitHub repository
- **Railway**: Deploy with one click
- **AWS Amplify**: Connect your repository

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page
├── components/
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with achievements
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Projects showcase with filtering
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Experience.tsx      # Experience & education timeline
│   ├── Contact.tsx         # Contact form
│   ├── Navbar.tsx          # Navigation with smooth scroll
│   ├── Footer.tsx          # Footer with social links
│   ├── ThemeToggle.tsx     # Dark/Light mode toggle
│   └── AnimatedCounter.tsx # Animated number counter
├── lib/
│   ├── projects.ts         # Project data & types
│   └── skills.ts           # Skills data & types
├── public/
│   └── images/             # Project images
├── styles/
│   └── globals.css         # Global styles & CSS variables
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## 🎨 Customization

### Update Personal Information

1. **Edit Hero Section**: `/components/Hero.tsx`
2. **Update About**: `/components/About.tsx`
3. **Modify Projects**: `/lib/projects.ts`
4. **Change Skills**: `/lib/skills.ts`
5. **Update Contact Info**: `/components/Contact.tsx` & `/components/Footer.tsx`

### Color Scheme

Colors are defined in `/styles/globals.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --accent: #2563eb;        /* Primary accent color */
  --accent-2: #7c3aed;      /* Secondary accent color */
  --text-primary: #0a0a0a;
  --text-secondary: #52525b;
}
```

### Add New Project

Edit `/lib/projects.ts`:

```typescript
{
  id: 'your-project',
  title: 'Your Project Title',
  tagline: 'Brief tagline',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: '/images/projects/your-project.jpg',
  category: 'ml', // or 'data-science', 'full-stack', 'research'
  tags: ['Python', 'ML', 'AI'],
  metrics: [
    { label: 'Accuracy', value: '95%' }
  ],
  github: 'https://github.com/username/repo',
  features: ['Feature 1', 'Feature 2'],
  technologies: ['Tech1', 'Tech2']
}
```

## 📧 Contact

- **Email**: contact@ghulamkeerio.com
- **LinkedIn**: [Ghulam Mustafa Keerio](https://linkedin.com/in/ghulam-mustafa-keerio)
- **GitHub**: [@Ghulam-Mustafa-Keerio](https://github.com/Ghulam-Mustafa-Keerio)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is [MIT](LICENSE) licensed.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Ghulam-Mustafa-Keerio">Ghulam Mustafa Keerio</a>
</p>

<p align="center">
  <strong>Machine Learning Engineer | Data Scientist | Full-Stack Developer</strong>
</p>

