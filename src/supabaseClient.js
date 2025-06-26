import { createClient } from '@supabase/supabase-js'

// Ganti dengan URL dan Kunci API dari dasbor Supabase Anda
const supabaseUrl = 'https://yztecwcdxpdqmfmmddhn.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dGVjd2NkeHBkcW1mbW1kZGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjgxMjUsImV4cCI6MjA2NjI0NDEyNX0.GbxJcTUQtdpuMXW3x2far3u7XsLg01f9xXrh0cUcsSo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
