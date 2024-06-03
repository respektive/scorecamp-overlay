<script>
    import { onMount } from "svelte";
    import { invalidate } from "$app/navigation";
    import CardWrapper from "$lib/CardWrapper.svelte";

    export let data;

    onMount(() => {
        const interval = setInterval(() => {
            invalidate("data:rankings");
        }, 300 * 1000); // 5 minutes

        return () => {
            clearInterval(interval);
        };
    });

    $: user = data.rankings.find(
        (u) => u.user_id == data.slug || u.username.toLowerCase() == data.slug
    );
    $: rankings = data.rankings;
</script>

<CardWrapper {user} {rankings} />
