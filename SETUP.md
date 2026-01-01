# Setup Guide - Arisotech Website

## Quick Start

### 1. Environment Variables Setup

Create a `.env.local` file in the `arisotech-website` directory with the following:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Arisotech
```

**Where to find Supabase credentials:**
1. Go to your Supabase Dashboard
2. Select your project
3. Go to Settings → API
4. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` `secret` key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

### 2. Verify Database Table

Make sure you've created the `contact_submissions` table in Supabase. If you haven't, run the SQL script we provided earlier.

### 3. Run Development Server

```bash
cd arisotech-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What's Included

✅ **Complete Website Structure**
- Home page with hero, services, portfolio, testimonials
- Services page
- Portfolio page
- About page
- Blog page (skeleton ready)
- Contact page with working form

✅ **Features**
- Fully responsive design
- Fast performance
- SEO optimized
- Contact form with Supabase integration
- Modern, clean UI
- TypeScript for type safety

✅ **Components**
- Reusable UI components (Button, Card, Input, etc.)
- Layout components (Header, Footer)
- Form components with validation
- Section components for pages

## Customization

### Update Site Information

Edit `content/site-config.json`:
- Site name
- Email, phone, address
- Social media links

### Update Services

Edit `content/services.json` to add/modify services.

### Update Portfolio

Edit `content/portfolio.json` to add your projects.

### Update Testimonials

Edit `content/testimonials.json` to add client testimonials.

### Update Team

Edit `content/team.json` to add team members.

## Testing the Contact Form

1. Make sure your Supabase table is set up correctly
2. Fill out the form on `/contact`
3. Submit and check your Supabase dashboard → Table Editor → `contact_submissions`
4. You should see the new submission!

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard
6. Deploy!

The site will be live at `https://your-project.vercel.app`

## Next Steps

1. ✅ Add your Supabase credentials to `.env.local`
2. ✅ Customize content in JSON files
3. ✅ Add your actual portfolio projects
4. ✅ Update team information
5. ✅ Test the contact form
6. ✅ Deploy to production

## Need Help?

- Check the README.md for more details
- Verify your Supabase table structure
- Check browser console for errors
- Verify environment variables are set correctly

