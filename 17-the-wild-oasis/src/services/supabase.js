import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jqxwjmcyhunyjcgjnobu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxeHdqbWN5aHVueWpjZ2pub2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNzE3MDIsImV4cCI6MjA1MTk0NzcwMn0.uYbfqIIwTR1tHEEIi3-aX_HheIY4M-s5wEnwCvVQ8xY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
