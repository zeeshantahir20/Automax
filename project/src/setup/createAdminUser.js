// This script helps create an admin user for Supabase
// Run this script with Node.js: 
// node src/setup/createAdminUser.js your-email@example.com your-password

const { createClient } = require('@supabase/supabase-js');

// Get command line arguments
const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.error('Usage: node createAdminUser.js your-email@example.com your-password');
  process.exit(1);
}

// Supabase configuration (same as in your app)
const supabaseUrl = 'https://viuyhuvawgfqcpkndtio.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdXlodXZhd2dmcWNwa25kdGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczOTc2NjYsImV4cCI6MjA2Mjk3MzY2Nn0.nU8Gq1L-UfI2gXPFPBqTNCrkmDRrqTCU1cl4-ePQgf4';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function createUser() {
  try {
    console.log(`Creating admin user with email: ${email}`);
    
    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          is_admin: true
        }
      }
    });

    if (error) {
      console.error('Error creating user:', error.message);
      return;
    }

    console.log('User created successfully!');
    console.log('User ID:', data.user.id);
    console.log('Email confirmation may be required. Check your email inbox.');
    
    // This part is just information for the user to understand the next steps
    console.log('\nNext steps:');
    console.log('1. Confirm your email if required.');
    console.log('2. Log in to the app using these credentials.');
    console.log('3. You should now be able to create, edit, and delete projects and services.');
    
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

createUser(); 