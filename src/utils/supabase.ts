import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// TODO: Store token in env
export default createClient<Database>(
	'https://buhiyljohoqlwzqszrii.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aGl5bGpvaG9xbHd6cXN6cmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyMDY0MTIsImV4cCI6MTk5MTc4MjQxMn0.wZkkVd2QmmLHH-Pg50Q9ZDlwxrZxn409gUOsf6kuAxI'
);
