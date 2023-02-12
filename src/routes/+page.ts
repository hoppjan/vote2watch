import supabase from '../utils/supabase';

export async function load() {
	const { data: movies, error } = await supabase.from('movie').select('*');
	return {
		movies: movies || [],
		error
	};
}
