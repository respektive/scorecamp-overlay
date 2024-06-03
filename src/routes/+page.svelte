<script>
    import { onMount } from "svelte";
    import { invalidate } from "$app/navigation";
    import CardWrapper from "$lib/CardWrapper.svelte";

    export let data;

    onMount(() => {
        const interval = setInterval(() => {
            invalidate("data:rankings");
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    });

    $: user = data.rankings.find((u) => u.user_id === 1023489);
    $: rankings = data.rankings;
</script>

<CardWrapper {user} {rankings} />
