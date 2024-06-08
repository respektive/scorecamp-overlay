<script>
    import PlayerCard from "./PlayerCard.svelte";
    import ScoreDelta from "./ScoreDelta.svelte";

    export let user;
    export let rankings;
</script>

<div class="container">
    <PlayerCard {user} />
    <div class="deltas">
        {#if user.rank > 1}
            <ScoreDelta main_user={user} compare_user={rankings[user.rank - 2]} />
        {/if}
        {#if user.rank > 1 && rankings[user.rank]}
            <div id="spacer" />
        {/if}
        {#if rankings[user.rank]}
            <ScoreDelta main_user={user} compare_user={rankings[user.rank]} />
        {/if}
    </div>
</div>

<style>
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 2vh;
    }

    .deltas {
        display: flex;
        margin: 1em;
        justify-content: space-evenly;
    }

    #spacer {
        width: 0.1em;
        border: 0;
        margin: 0;
        background: linear-gradient(
            rgba(128, 128, 128, 0),
            rgba(128, 128, 128, 0.3),
            rgba(128, 128, 128, 0)
        );
    }
</style>
