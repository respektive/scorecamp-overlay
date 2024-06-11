<script>
    import { tweened } from 'svelte/motion';
    import { derived } from 'svelte/store';
    import { tweenSettings } from '$lib/constants';

    const score = tweened(0, tweenSettings);

    const gainedScore = derived(score, ($score) => Math.round($score).toLocaleString("en-US"));
    const cardHue = derived(score, ($score) => ($score / 1000000) % 360);

    $: score.set(user.gained_score);

    export let user;
</script>

<div class="card" style="--card-hue: {$cardHue};">
    <div id="avatar" style="background-image: url(https://a.ppy.sh/{user.user_id});" />
    <div class="stats">
        <p id="username">{user.username}</p>
        <hr />
        <p id="gained">{$gainedScore}</p>
    </div>
    <p id="rank">#{user.rank}</p>
</div>

<style>
    p {
        margin: 0;
    }

    hr {
        border: 0;
        margin: 0;
        height: 0.1em;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
        );
    }

    .card {
        --card-hue: 200;
        position: relative;
        width: 100%;
        max-width: 1200px;
        max-height: 300px;
        aspect-ratio: 4/1;
        background: linear-gradient(
            180deg,
            hsl(var(--card-hue), 60%, 30%),
            hsl(var(--card-hue), 60%, 20%)
        );
        font-size: calc(min(100vw, 1200px) / 100);
        border-radius: 4em;
        color: white;
        display: flex;
        flex-direction: row;
        filter: drop-shadow(1em 1em 1em rgba(0, 0, 0, 0.5));
    }

    .stats {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    #rank {
        position: absolute;
        font-size: 12em;
        font-weight: bold;
        opacity: 35%;
        right: 0.2em;
        bottom: -0.1em;
    }

    #username {
        font-size: 6em;
        font-weight: bold;
        filter: drop-shadow(0.05em 0.05em 0.05em rgba(0, 0, 0, 0.5));
    }

    #gained {
        font-size: 6em;
        font-weight: bold;
        filter: drop-shadow(0.05em 0.05em 0.05em rgba(0, 0, 0, 0.5));
    }

    #avatar {
        margin: 1em;
        border-radius: 3em;
        background-repeat: no-repeat;
        background-size: contain;
        aspect-ratio: 1;
    }
</style>
