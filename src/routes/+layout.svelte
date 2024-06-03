<script>
    import "../app.css";
</script>

<main>
    <slot />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>
