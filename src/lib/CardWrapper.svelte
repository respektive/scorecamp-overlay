<script>
    import PlayerCard from "./PlayerCard.svelte";
    import ScoreDelta from "./ScoreDelta.svelte";

    export let user;
    export let rankings;
</script>

<div class="container">
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
    <PlayerCard {user} />
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
        background: linear-gradient(180deg, hsla(200, 40%, 30%, 0.7), hsla(200, 30%, 30%, 0.7));
        border-radius: 1em;
        filter: drop-shadow(1em 1em 1em rgba(0, 0, 0, 0.5));
    }

    #spacer {
        width: 0.1em;
        border: 0;
        margin: 0;
        background: linear-gradient(
            rgba(128, 128, 128, 0),
            rgba(255, 255, 255, 0.3),
            rgba(128, 128, 128, 0)
        );
    }
</style>
