export function load({ depends }) {
    depends("data:rankings");

    return {
        rankings: [
            {
                username: "BanchoBot",
                user_id: 3,
                rank: 1,
                gained_score: 20000000000 + randomGained(),
            },
            {
                username: "respektive",
                user_id: 1023489,
                rank: 2,
                gained_score: 12345678910,
            },
            {
                username: "peppy",
                user_id: 2,
                rank: 3,
                gained_score: randomGained(),
            },
        ],
    };
}

function randomGained() {
    return Math.floor(Math.random() * 10000000000) + 1;
}
