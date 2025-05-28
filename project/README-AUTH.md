# Authentication Setup for Project Management

## Understanding the Issue

If you're experiencing problems creating, editing, or deleting projects in the admin dashboard, it's likely due to authentication issues. The database is configured with Row Level Security (RLS) that requires users to be authenticated before they can modify data.

## Quick Fix

1. **Check Authentication Status**: 
   - Look for the "Authentication Required" warning banner on the admin pages
   - The diagnostic tool in the bottom right corner also shows authentication status
   
2. **Login Using Existing Admin Credentials**:
   - Click the "Log In" button on the banner or admin page
   - Enter your admin email and password

3. **Create a New Admin User** (if you don't have credentials):
   - Run the setup script to create a new admin user:
   ```
   cd project
   node src/setup/createAdminUser.js your-email@example.com your-secure-password
   ```
   - Follow any email verification steps if required
   - Log in with your new credentials

## Understanding the Database Permissions

The database uses Row Level Security (RLS) with these policies:

1. **Anyone can read data** - Public read access to projects and services
2. **Only authenticated users can create new data** - You must be logged in
3. **Only authenticated users can update or delete data** - You must be logged in

## Troubleshooting

If you continue experiencing issues:

1. **Check Browser Console**: Look for error messages that might indicate auth problems
2. **Use the Diagnostics Tool**: Click "Details" on the diagnostics panel in the bottom right corner
3. **Run the Insert Test**: On the diagnostics panel, click "Run Test" to check if you have write permissions
4. **Verify Supabase Configuration**: Make sure your Supabase URL and key are correct in `src/lib/supabase.ts`

## Advanced: Modifying RLS Policies

If needed, you can modify the RLS policies in your Supabase database:

```sql
-- To disable RLS temporarily (use with caution):
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
ALTER TABLE services DISABLE ROW LEVEL SECURITY;

-- To restore RLS:
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
```

## Need More Help?

If you're still experiencing issues:
1. Check that you're using the correct Supabase credentials
2. Verify that your project tables exist with the correct schema
3. Try creating a fresh admin user
4. Check if there are any network issues connecting to Supabase 