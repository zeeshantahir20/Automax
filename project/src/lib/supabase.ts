import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://viuyhuvawgfqcpkndtio.supabase.co';
// API key provided by user
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdXlodXZhd2dmcWNwa25kdGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczOTc2NjYsImV4cCI6MjA2Mjk3MzY2Nn0.nU8Gq1L-UfI2gXPFPBqTNCrkmDRrqTCU1cl4-ePQgf4';

console.log('Initializing Supabase client with URL:', supabaseUrl);

// Initialize the Supabase client with debugging options
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  },
  global: {
    headers: {
      'x-application-name': 'automax-website'
    }
  }
});

// Test the connection immediately
supabase
  .from('projects')
  .select('count()', { count: 'exact', head: true })
  .then(({ count, error }) => {
    if (error) {
      console.error('Supabase initial connection test failed:', error);
    } else {
      console.log('Supabase initial connection successful, projects count:', count);
    }
  })
  .catch(err => {
    console.error('Supabase connection error:', err);
  }); 