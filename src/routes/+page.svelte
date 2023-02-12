<script script lang="ts">
	import type { PageData } from './$types';
    import Footer from "../lib/components/Footer.svelte"
    import Main from "./+layout.svelte";

	export let data: PageData;
</script>


    <h1>Welcome to vote2watch</h1>
    <h1>Welcome to VOTE2WATCH</h1>
    <h1>Welcome to Vote2Watch</h1>

    {#each data.movies as movie}
        <p>{movie.title}</p>
        <span>{movie.release_year}</span>
    {/each}
