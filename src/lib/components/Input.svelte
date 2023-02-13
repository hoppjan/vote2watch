<script lang="ts">
	export let id: string;
	export let name: string;
	export let placeholder: string;
	export let color: string;
	export let value: string | number;
	export let type: string = 'text';

	$: if (color == 'light') {
		color = 'var(--color-background-secondary)';
	} else {
		color = 'var(--color-background-primary)';
	}

	const handleInput = (e: any) => {
		// in here, you can switch on type and implement
		// whatever behaviour you need
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};
</script>

<label for={id}>{name}</label>
<input
	{id}
	autocomplete="off"
	{type}
	{name}
	{placeholder}
	style="background-color: {color}"
	on:input={handleInput}
/>

<style>
	label {
		text-align: start;
		font-size: var(--font-size-medium);
		margin-left: 3px;
	}
	input {
		width: 100%;
		border-radius: 10px;
		padding: 15px 20px 15px 20px;
		outline: none;
		box-sizing: border-box;
		border: none;
		caret-color: var(--color-text-primary);
		color: var(--color-text-primary);
		border: 1px solid transparent;
	}

	:focus {
		border: 1px solid var(--color-accent-blue);
	}
	::placeholder {
		color: var(--color-text-secondary);
	}
</style>
