<script lang="ts">
	import Input from '../../lib/components/Input.svelte';
	import WideButton from '../../lib/components/WideButton.svelte';

	let logoSrc = './Vote2WatchLogo.png';
	let email: string;
	let name: string;
	const submitHandler = () => {
		console.log(email, name);
	};
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<img src={logoSrc} alt="Schriftzug 'Vote2Watch' als Logo" />
	</div>
	<form on:submit={submitHandler}>
		<div class="input">
			<Input
				id="E-Mail"
				type="email"
				name="E-Mail"
				placeholder="Deine E-Mail Adresse"
				color="light"
				bind:value={email}
			/>
		</div>

		<div class="buttons">
			<WideButton text="Login / Registrieren" />
		</div>
	</form>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 90%;
		min-width: 250px;
		gap: 15px;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 100%;
		gap: 10px;
		margin-top: 10px;
		flex-wrap: wrap;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.input {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 5px;
	}

	.logo-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100px;
		margin-bottom: 50px;
		margin-top: 50px;
	}
</style>
