# VMC Media Pvt. Ltd. - Digital Marketing Website

A modern, feature-rich digital marketing agency website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features Implemented

### ✅ Complete Website Structure
- **Home Page** - Hero section, Services, About, Stats, Portfolio, Testimonials, CTA
- **Blog Page** - Grid layout with all blog posts
- **Blog Detail Pages** - Individual blog post pages with full content
- **Portfolio Detail Pages** - Case study pages with results and testimonials
- **Contact Page** - Contact form with company information
- **404 Page** - Custom not found page

### ✅ Advanced Features

#### 🎨 **Dark Mode**
- Full dark/light theme support using `next-themes`
- Theme toggle button in header
- System preference detection
- Smooth transitions between themes

#### 🎬 **Framer Motion Animations**
- Page entrance animations
- Scroll-triggered animations
- Smooth transitions on blog and portfolio detail pages
- Card hover effects

#### 🔍 **SEO Optimization**
- Dynamic meta tags using `react-helmet-async`
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data ready
- Optimized meta descriptions for all pages

#### 📱 **Responsive Design**
- Mobile-first approach
- Fully responsive across all devices
- Touch-friendly navigation
- Optimized images

#### 🎯 **Dynamic Routing**
- Blog post detail pages: `/blog/:slug`
- Portfolio case studies: `/portfolio/:slug`
- Clean URL structure
- 404 handling

### 📄 Page Structure

```
/                          - Home page
/blog                      - Blog listing
/blog/:slug                - Individual blog posts
/portfolio/:slug           - Portfolio case studies
/contact                   - Contact form
```

### 🎨 Design System

- **Primary Color**: Custom brand color
- **Secondary Color**: Accent color for CTAs
- **Typography**: Modern, clean font stack
- **Components**: 40+ Shadcn/UI components
- **Icons**: Lucide React icons
- **Animations**: Framer Motion

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI (Radix UI)
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Theme**: next-themes
- **SEO**: react-helmet-async
- **Forms**: React Hook Form + Zod validation
- **State**: TanStack Query
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Components

### Header
- Sticky navigation
- Dark mode toggle
- Mobile menu
- Contact information
- Smooth scroll

### SEO Component
```tsx
<SEO 
  title="Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  canonical="/page-url"
/>
```

### Theme Toggle
```tsx
<ThemeToggle />
```

### Dynamic Pages

#### Blog Detail Page
- Full blog content
- Share functionality
- Related posts
- CTA section

#### Portfolio Detail Page
- Challenge & Solution sections
- Key metrics and results
- Client testimonials
- Visual case study layout

## 📊 Content Management

### Blog Posts
Located in: `src/pages/BlogDetail.tsx`
- Add new posts to the `blogData` object
- Include: title, excerpt, content, image, category, author

### Portfolio Projects
Located in: `src/pages/PortfolioDetail.tsx`
- Add new projects to the `portfolioData` object
- Include: title, challenge, solution, results, testimonial

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "...",
  secondary: "...",
  accent: "..."
}
```

### Fonts
Edit `src/index.css` to change font families

### Content
- Update company info in components
- Modify hero section content
- Add/remove services
- Update stats and testimonials

## 📱 Contact Form

The contact form includes:
- Name and email validation
- Phone number field
- Service selection dropdown
- Message textarea
- Form submission handler
- Toast notifications

## 🔗 Links & Navigation

All internal links use React Router's navigation:
- Blog posts link to detail pages
- Portfolio items link to case studies
- CTA buttons navigate to contact page
- Back buttons for easy navigation

## 🌟 Best Practices

- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Accessibility features
- ✅ Performance optimization
- ✅ Clean code structure
- ✅ Reusable components

## 📈 Performance

- Fast page loads with Vite
- Optimized images
- Code splitting
- Lazy loading ready
- Minimal bundle size

## 🚀 Deployment

The site is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
# Deploy the 'dist' folder
```

## 📝 Environment Variables

Create `.env` file:
```env
VITE_SITE_URL=https://vmcmedia.com
VITE_API_URL=your-api-url (for form submissions)
```

## 🔒 Security

- Form validation with Zod
- XSS protection
- CSRF ready
- Secure API calls

## 📄 License

Copyright © 2025 VMC Media Pvt. Ltd. All rights reserved.

## 🤝 Support

For support, email: info@vmcmedia.com
Phone: +91 XXXXXXXXXX
Business Hours: Mon-Sat | 10 AM – 6 PM

---

**Built with ❤️ for VMC Media Pvt. Ltd.**
