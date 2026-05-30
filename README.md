# OPSIE - Automation Solutions Platform

Welcome to **OPSIE**, a cutting-edge automation solutions platform that helps SMBs, agencies, and ops teams streamline their workflows using no-code automation and AI-powered tools.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** for version control

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <YOUR_GIT_URL>
   cd opsie-pixel-flow
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 🛠️ Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Charts**: Recharts for data visualization

## 📁 Project Structure

```
opsie-automation-platform/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Hero.tsx       # Landing page hero section
│   │   ├── Services.tsx   # Automation services showcase
│   │   └── ...            # Other components
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage
│   │   ├── CaseStudies.tsx # Case studies page
│   │   └── NotFound.tsx   # 404 page
│   ├── lib/               # Utility functions
│   ├── hooks/             # Custom React hooks
│   └── App.tsx           # Main app component
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Available Scripts

In the project directory, you can run:

### Development

- `npm run dev` - Starts the development server with hot reload
- `npm run build` - Creates an optimized production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Production Build

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 🌐 Deployment Options

### Option 1: Lovable Platform (Recommended)

The easiest way to deploy is through Lovable:

1. Visit your [Lovable Project Dashboard](https://lovable.dev/projects/a14db114-7f39-4660-8827-deb9f356435c)
2. Click "Share" → "Publish"
3. Your app will be live at `https://your-project.lovable.app`

### Option 2: Vercel (Popular Choice)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Option 3: Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository for automatic deployments

### Option 4: Traditional Web Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes (for SPA routing)

### Option 5: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Option 6: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

## ⚙️ Environment Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
# Contact API
VITE_CONTACT_API_URL=/api/contact

# Server-side webhook for contact form (set in Vercel project settings)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec

# Analytics (optional)
VITE_GA_TRACKING_ID=your-google-analytics-id
VITE_HOTJAR_ID=your-hotjar-id

# Feature Flags
VITE_ENABLE_CHAT=true
VITE_ENABLE_BOOKING=true
```

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the frontend.

## 🎨 Customization

### Styling

- **Colors**: Modify `tailwind.config.ts` to change the color scheme
- **Fonts**: Update font imports in `src/index.css`
- **Components**: Customize shadcn/ui components in `src/components/ui/`

### Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Case Studies**: Update `src/pages/CaseStudies.tsx`
- **Services**: Modify `src/components/Services.tsx`

## 🐛 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port Already in Use**

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

**TypeScript Errors**

```bash
# Check for type issues
npm run type-check
```

## 📊 Performance Optimization

### Production Optimizations

- **Code Splitting**: Automatic with Vite and React Router
- **Asset Optimization**: Images and CSS are automatically optimized
- **Bundle Analysis**: Run `npm run build -- --analyze` to see bundle size

### SEO Optimization

- Update `index.html` with proper meta tags
- Add structured data for better search visibility
- Implement proper Open Graph tags

## 🔒 Security Considerations

- **Environment Variables**: Never commit sensitive data to version control
- **Content Security Policy**: Configure CSP headers for production
- **HTTPS**: Always use HTTPS in production
- **Dependencies**: Regularly update dependencies for security patches

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

Need help? Here are your options:

- **Lovable Community**: [Discord Server](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **Documentation**: [Lovable Docs](https://docs.lovable.dev/)
- **Email Support**: Contact the development team
- **GitHub Issues**: Create an issue for bugs or feature requests

## 🎯 Roadmap

### Upcoming Features

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with more automation tools
- [ ] Mobile app companion
- [ ] Advanced user authentication
- [ ] Team collaboration features

---

**Built with ❤️ using Lovable - The AI-powered web app builder**

For more information about Lovable, visit [lovable.dev](https://lovable.dev)
