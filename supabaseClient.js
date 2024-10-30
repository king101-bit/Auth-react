// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase configuration
const supabaseUrl = 'https://vccgzjpbnawoqpqrtgyw.supabase.co';  // Replace with your actual Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjY2d6anBibmF3b3FwcXJ0Z3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTk5NjgsImV4cCI6MjA0NTc5NTk2OH0.Y3xX7XWjDgqrR6kVDFY9iljKAnsggyQeLtlxxReALKc';     // Replace with your actual anon key

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey);

// Initialize the Supabase client with hardcoded values
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example function to test the client
async function testConnection() {
    const { data, error } = await supabase.from('your-table').select('*');  // Replace 'your-table' with a table name

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Fetched data:', data);
    }
}

// Run the test function
testConnection();
