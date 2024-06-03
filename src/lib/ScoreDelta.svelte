<script>
    export let main_user;
    export let compare_user;

    let delta = compare_user.gained_score - main_user.gained_score;
</script>

<div class="delta">
    <p id="username">{compare_user.username}</p>
    <p id="score">
        {compare_user.gained_score.toLocaleString("en-US")}
        <span id={delta > 0 ? "positive" : "negative"}>{delta.toLocaleString("en-US")}</span>
    </p>
</div>

<style>
    p {
        margin: 0;
    }

    #negative {
        color: lime;
    }

    #positive {
        color: red;
    }

    #positive::before {
        content: "+";
    }

    .delta {
        padding: 1em;
        position: relative;
        font-size: calc(min(100vw, 1200px) / 100);
        font-weight: bold;
        border-radius: 4em;
        color: white;
        display: flex;
        flex-direction: column;
        filter: drop-shadow(0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5));
    }

    #username {
        font-size: 4em;
    }

    #score {
        font-size: 3em;
        padding-top: 0.25em;
    }
</style>
