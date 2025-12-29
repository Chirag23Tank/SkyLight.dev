-- =====================================================
-- Fix RLS Policy for Contact Submissions
-- =====================================================
-- This fixes the Row Level Security policy to allow
-- anonymous users to insert contact form submissions
-- while maintaining security for other operations.
-- =====================================================

-- Drop the existing policy if it exists (in case it was created incorrectly)
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts for contact submissions" ON contact_submissions;

-- Create the correct policy that allows anonymous inserts
-- This policy allows anyone (anon role) to INSERT into the table
-- but they can only insert rows (not read/update/delete)
CREATE POLICY "Allow anonymous inserts for contact submissions"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Verify the policy was created
-- You can check this in Supabase Dashboard -> Authentication -> Policies

