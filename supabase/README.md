# Supabase Database Setup

## Fix RLS Policy for Contact Form

The contact form requires a proper RLS (Row Level Security) policy to allow anonymous users to submit forms.

### Quick Fix

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the SQL from `fix-rls-policy.sql`
4. Click **Run**

### What This Does

- Removes any incorrectly configured policies
- Creates a new policy that allows anonymous users to INSERT contact submissions
- Maintains security by only allowing inserts (not reads/updates/deletes)

### Verification

After running the SQL:

1. Go to **Authentication** → **Policies** in Supabase Dashboard
2. Find the `contact_submissions` table
3. You should see the policy: "Allow anonymous inserts for contact submissions"

### Testing

After applying the fix:

1. Submit a test contact form on your website
2. Check Supabase Dashboard → **Table Editor** → `contact_submissions`
3. You should see the new submission

### Security Notes

- ✅ Anonymous users can INSERT (submit forms)
- ✅ Anonymous users CANNOT read other submissions
- ✅ Anonymous users CANNOT update or delete
- ✅ Only server-side code (with service role key) can read all submissions

This maintains proper security while allowing public form submissions.

