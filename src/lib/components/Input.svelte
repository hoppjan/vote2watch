<script>
    export let name;
    export let type = "text";
    export let placeholder;
    export let color;
    export let value;

    if(color == "light") {
        color = "var(--color-background-secondary)"
    } else {
        color = "var(--color-background-primary)"
    }
</script>

<input type="text" {name} {placeholder} style="background-color: {color}" bind:value={value} >

<style>
    input {
        width: 100%;
        border-radius: 10px;
        padding: 15px 20px 15px 20px;
        outline: none;
        box-sizing: border-box;
        border: none;
        caret-color: var(--color-text-primary);
        color: var(--color-text-primary)
    }
</style>