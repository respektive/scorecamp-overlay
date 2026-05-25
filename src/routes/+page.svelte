<script>
    import { onMount } from "svelte";
    import url from "$lib/url";
    import { invalidate } from "$app/navigation";
    import CardWrapper from "$lib/CardWrapper.svelte";
    import { dev } from "$app/environment";

    export let data;

    // 10 seconds in dev mode, 60 secs in prod
    const REFRESH_INTERVAL = (dev ? 10 : 60) * 1000;

    onMount(() => {
        const interval = setInterval(() => {
            invalidate("data:rankings");
        }, REFRESH_INTERVAL); // 1 minute

        return () => {
            clearInterval(interval);
        };
    });

    $: teamName = decodeURIComponent($url.hash.substring(1).toLowerCase());
    $: team = teamName ? data.rankings.find((t) => t.teamName.toLowerCase() === teamName) : null;
    $: rankings = data.rankings;
</script>

{#if team}
    <CardWrapper {team} {rankings} />
{:else}
    <table>
        <th>Rank</th>
        <th>Team Name</th>

        <th>Current Score</th>
        <th>Score Gained</th>

        <th>Player 1</th>
        <th>Score Gained</th>
        <th>Contributed</th>

        <th>Player 2</th>
        <th>Score Gained</th>
        <th>Contributed</th>

        {#each rankings as team}
            <tr class:eliminated={team.eliminated}>
                <td class="rank">{team.rank}</td>
                <td class="user"><a href="#{team.teamName}">{team.teamName}</a></td>

                <td class="score">{team.currentScore.toLocaleString("en-US")}</td>
                <td class="score gained">{team.scoreGained.toLocaleString("en-US")}</td>

                <td class="user">{team.player1.name}</td>
                <td class="score">{team.player1.scoreGained.toLocaleString("en-US")}</td>
                <td class="score">{team.player1.contribution}</td>

                <td class="user">{team.player2.name}</td>
                <td class="score">{team.player2.scoreGained.toLocaleString("en-US")}</td>
                <td class="score">{team.player2.contribution}</td>
            </tr>
        {/each}
    </table>
{/if}

<style>
    table {
        border-spacing: 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin: 10px auto;
    }

    th {
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        padding: 4px;
        background-color: #3a3a3a;
        color: white;
    }

    tr:nth-child(2n) {
        background: rgba(0, 0, 0, 0.1);
    }

    tr.eliminated {
        background: rgba(128, 0, 0, 0.5);
    }

    tr.eliminated a {
        color: #3f4a70;
    }

    td {
        padding: 4px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    td.rank {
        font-weight: bold;
    }

    td.rank,
    td.score {
        text-align: right;
        font-family: monospace;
    }

    td.gained {
        font-weight: bold;
    }

    td.user a {
        text-decoration: none;
    }
</style>
