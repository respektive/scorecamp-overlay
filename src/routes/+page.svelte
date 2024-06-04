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

    $: username = $url.hash.substring(1).toLowerCase();
    $: user = username ? data.rankings.find((u) => u.username.toLowerCase() === username) : null;
    $: rankings = data.rankings;
</script>

<style>
    td.score {
        text-align: right;
        font-family: monospace;
    }
</style>

{#if user }
    <CardWrapper {user} {rankings} />
{:else}
    <table>
        {#each rankings as user, index}
            <tr>
                <td>#{index + 1}</td>
                <td><a href="#{user.username}">{user.username}</a></td>
                <td class="score">{user.gained_score.toLocaleString()}</td>
            </tr>  
        {/each}
    </table>
{/if}
