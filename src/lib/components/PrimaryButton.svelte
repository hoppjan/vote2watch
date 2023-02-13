<script lang="ts">
	export let text: string;
	export let disabled: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'submit';
</script>

<button {type} {disabled}>{text}</button>

<style>
	button {
		background-color: var(--color-background-tertiary);
		color: var(--color-text-primary);
		border: none;
		padding: 10px 30px 10px 30px;
		border-radius: 10px;
		transition: ease;
		transition-duration: 0.2s;
	}
	button:hover {
		background-color: var(--color-background-secondary);
		transform: scale(1.05);
	}
</style>
