# ToolexUAE - Next.js Industrial Equipment Platform

A high-performance industrial equipment platform built with Next.js 15, TypeScript, and Tailwind CSS. Migrated from React/Vite to Next.js for improved performance and SEO.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **CMS Integration**: Sanity CMS for content management
- **E-commerce Ready**: Shopping cart, product catalog, quote requests
- **Responsive Design**: Mobile-first approach with modern UI components
- **Performance Optimized**: Static generation, image optimization, code splitting
- **SEO Friendly**: Server-side rendering and meta tag optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **CMS**: Sanity
- **State Management**: React Context + Custom Hooks
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React, FontAwesome

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd toolex-nextjs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🚀 Deployment

### Vercel
1. Connect GitHub repository to Vercel
2. Set environment variables in dashboard
3. Deploy automatically on push

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── types/           # TypeScript type definitions
└── contexts/        # React contexts
```