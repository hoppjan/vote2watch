<script>
    import Footer from "../lib/components/Footer.svelte";
</script>

<style>
    :root {
        --color-background-primary: #080715;
        --color-background-secondary: #101629;
        --color-background-tertiary: rgba(255, 255, 255, 0.1);
        --color-text-primary: #BEC3D6;
        --color-warning: #B95151;
        --color-text-warning: #D6BEBE;
        --color-success: #215827;
        --color-text-success: #BED6C3;
        --color-success-light: #3A563D;
        --color-accent-blue: #213060;
        --color-accent-blue-light: #595B64;
        --font-primary: sans-serif;
        --text-weigth-primary: 500;
        --text-weigth-light: 300;
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
        position: relative;
        padding-bottom: 70px;
        height: 100%;
        overflow-x: hidden
    }

</style>

<main>
    <div>
        <slot></slot>
        <Footer/>
    </div>

</main>