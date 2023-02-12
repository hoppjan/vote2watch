<script>
    import Input from "../../lib/components/Input.svelte"
    import Button from "../../lib/components/Button.svelte"

    let email;
    let name;
    const submitHandler = () => {
        console.log(email,name)
    }
</script>

    <form on:submit={submitHandler}>
        <Input type="email" name="E-Mail" placeholder="E-Mail Adresse" color="light" bind:value={email}/>
        <Input name="Nutzername" placeholder="Nutzername" color="dark" bind:value={name}/>
        <Button text="Abschicken"/>
    </form>



