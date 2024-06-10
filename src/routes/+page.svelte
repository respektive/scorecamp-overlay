<script>
    import { onMount } from "svelte";
    import url from "$lib/url";
    import { invalidate } from "$app/navigation";
    import CardWrapper from "$lib/CardWrapper.svelte";

    export let data;

    onMount(() => {
        const interval = setInterval(() => {
            invalidate("data:rankings");
        }, 60 * 1000); // 1 minute

        return () => {
            clearInterval(interval);
        };
    });

    $: username = decodeURIComponent($url.hash.substring(1).toLowerCase());
    $: user = username ? data.rankings.find((u) => u.username.toLowerCase() === username) : null;
    $: rankings = data.rankings;
</script>

<style>
    table {
        border-spacing: 0;
    }

    tr:nth-child(2n) {
        background: rgba(0,0,0,0.1);
    }

    td {
        padding: 4px;
    }

    td.rank {
        font-weight: bold;
    }

    td.rank, td.score {
        text-align: right;
        font-family: monospace;
    }

    td.user a {
        text-decoration: none;
    }
</style>

{#if user }
    <CardWrapper {user} {rankings} />
{:else}
    <table>
        {#each rankings as user, index}
            <tr>
                <td class="rank">#{index + 1}</td>
                <td class="user"><a href="#{user.username}">{user.username}</a></td>
                <td class="score">{user.gained_score.toLocaleString()}</td>
            </tr>  
        {/each}
    </table>
{/if}
