<script>
    import { tweened } from "svelte/motion";
    import { derived } from "svelte/store";
    import { tweenSettings, getRankColour } from "$lib/constants";

    const score = tweened(0, tweenSettings);

    const gainedScore = derived(score, ($score) => Math.round($score).toLocaleString("en-US"));
    const cardHue = derived(score, ($score) => ($score / 1000000) % 360);

    const getFontSize = (name) => {
        let fontSize = "6em";
        if (name.length > 22) fontSize = "4.5em";
        if (name.length >= 30) fontSize = "3.5em";
        console.log(fontSize);
        return fontSize;
    };

    $: score.set(team.scoreGained);

    export let team;
</script>

<div class="card" style="--card-hue: {$cardHue};">
    <div class="avatar-wrapper">
        <div class="avatar p1" style="background-image: url(https://a.ppy.sh/{team.player1.id})"></div>
        <div class="avatar p2" style="background-image: url(https://a.ppy.sh/{team.player2.id})"></div>
        <div class="slash-line"></div>
    </div>

    <div class="stats">
        <p id="username" style="--font-size: {getFontSize(team.teamName)};">{team.teamName}</p>
        <hr />
        <p id="gained">{$gainedScore}</p>
    </div>
    <p id="rank" style="--rank-colour: {getRankColour(team.rank)};">#{team.rank}</p>
</div>

<style>
    p {
        margin: 0;
    }

    hr {
        border: 0;
        margin: 0;
        height: 0.1em;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    }

    .card {
        --card-hue: 200;
        position: relative;
        width: 100%;
        max-width: 1200px;
        max-height: 300px;
        aspect-ratio: 4/1;
        background: linear-gradient(180deg, hsl(var(--card-hue), 60%, 30%), hsl(var(--card-hue), 60%, 20%));
        font-size: calc(min(100vw, 1200px) / 88);
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
        --rank-colour: #bab2ab;
        position: absolute;
        font-size: 12em;
        font-weight: 600;
        right: 0.2em;
        bottom: 0em;
        background-image: var(--rank-colour);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(0.03em 0.03em 0.03em rgba(0, 0, 0, 0.5));
    }

    #username {
        --font-size: 6em;
        font-size: var(--font-size);
        font-weight: 600;
        filter: drop-shadow(0.05em 0.05em 0.05em rgba(0, 0, 0, 0.5));
    }

    #gained {
        font-size: 6em;
        font-weight: 800;
        filter: drop-shadow(0.05em 0.05em 0.05em rgba(0, 0, 0, 0.5));
    }

    .avatar-wrapper {
        margin: 1em;
        background-repeat: no-repeat;
        background-size: contain;
        aspect-ratio: 1;
        position: relative;
    }

    .avatar {
        border-radius: 3em;
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
    }

    .p2 {
        -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }

    .slash-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.2em;
        height: 129%;
        background: white;
        transform: rotate(45deg) translateY(-9em) translateX(5em);
        box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.8);
        z-index: 5;
    }
</style>
