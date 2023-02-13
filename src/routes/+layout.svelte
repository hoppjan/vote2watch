<script>
	import Footer from '../lib/components/Footer.svelte';
</script>

<main>
	<div>
		<slot />
		<Footer />
	</div>
</main>

<style>
	:root {
		--color-background-primary: #080715;
		--color-background-secondary: #101629;
		--color-background-tertiary: rgba(255, 255, 255, 0.1);
		--color-text-primary: #bec3d6;
		--color-warning: #b95151;
		--color-text-warning: #d6bebe;
		--color-success: #215827;
		--color-text-success: #bed6c3;
		--color-success-light: #3a563d;
		--color-accent-blue: #213060;
		--color-accent-blue-light: #595b64;
		--font-primary: sans-serif;
		--text-weigth-primary: 500;
		--text-weigth-light: 300;
		--font-size-large: 1rem;
		--font-size-medium: 0.8rem;
		--font-size-small: 0.6rem;
	}

	main {
		background-color: var(--color-background-primary);
		min-width: 100%;
		min-height: 100%;
		margin-top: 0px;
		display: flex;
		justify-content: center;
		color: var(--color-text-primary);
		font-family: var(--font-primary);
		font-weight: var(--text-weigth-primary);
	}

	div {
		max-width: 600px;
		padding-bottom: 70px;
		min-height: 100%;
		overflow-x: hidden;
	}
</style>
