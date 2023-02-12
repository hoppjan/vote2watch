import supabase from '../lib/utils/supabase';

export async function load() {
	const { data: movies, error } = await supabase.from('movie').select('*');
	return {
		movies: movies || [],
		error
	};
}
