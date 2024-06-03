<script>
    import { onMount } from "svelte";
    import url from "$lib/url";
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

    $: username = $url.hash.substring(1).toLowerCase() || "respektive";
    $: user = data.rankings.find((u) => u.username.toLowerCase() === username);
    $: rankings = data.rankings;
</script>

<CardWrapper {user} {rankings} />
