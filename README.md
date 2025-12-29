# SkyLight.dev Website

A modern, professional website for SkyLight.dev built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🚀 **Next.js 14** with App Router
- 📱 **Fully Responsive** design
- ⚡ **Fast Performance** with optimized loading
- 🎨 **Modern UI** with Tailwind CSS
- 📝 **Contact Form** with Supabase integration
- 🔍 **SEO Optimized** with metadata
- ♿ **Accessible** components

## Pages

- **Home** - Hero section, services overview, portfolio showcase, testimonials
- **Services** - Detailed service offerings
- **Portfolio** - Project showcase
- **About** - Company information and team
- **Blog** - Blog posts (coming soon)
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   cd skylight-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=SkyLight.dev
   ```

   Get your Supabase credentials from:
   - Supabase Dashboard → Settings → API

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Setup

Make sure you've created the `contact_submissions` table in your Supabase database. Run the SQL script provided in your database setup documentation.

## Project Structure

```
skylight-website/
├── app/
│   ├── (marketing)/          # Marketing pages
│   ├── api/                  # API routes
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── layout/               # Header, Footer
│   ├── forms/                # Form components
│   └── sections/             # Page sections
├── content/                  # JSON content files
├── lib/
│   ├── supabase/             # Supabase clients
│   └── utils.ts              # Utility functions
└── types/                    # TypeScript types
```

## Customization

### Update Content

Edit JSON files in the `content/` directory:
- `services.json` - Service offerings
- `portfolio.json` - Portfolio projects
- `testimonials.json` - Client testimonials
- `team.json` - Team members
- `site-config.json` - Site configuration

### Styling

The project uses Tailwind CSS. Modify styles in:
- Component files (inline Tailwind classes)
- `app/globals.css` for global styles

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Database and backend
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## License

Private - SkyLight.dev
