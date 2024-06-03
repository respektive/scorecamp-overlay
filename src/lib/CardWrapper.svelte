<script>
    import PlayerCard from "./PlayerCard.svelte";
    import ScoreDelta from "./ScoreDelta.svelte";

    export let user;
    export let rankings;
</script>

<div class="container">
    {#if user.rank > 1}
        <ScoreDelta main_user={user} compare_user={rankings[user.rank - 2]} />
    {/if}
    <PlayerCard {user} />
    {#if rankings[user.rank]}
        <ScoreDelta main_user={user} compare_user={rankings[user.rank]} />
    {/if}
</div>

<style>
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 2vh;
    }
</style>
