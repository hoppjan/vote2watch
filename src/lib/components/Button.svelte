<script>
    export let text;
    export let disabled = false;
    export let type = "submit"

    disabled = disabled ? "disabled" : ""
</script>

<button {type} {disabled}>{text}</button>

<style>
    button {
        background-color: var(--color-background-tertiary);
        color: var(--color-text-primary);
        border: none;
        padding: 10px 30px 10px 30px;
        border-radius: 10px;
    }
</style>