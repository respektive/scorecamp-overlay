import { parse } from "svelte/compiler";

let cachedRankings = null;

export async function getRankings() {
    try {
        const res = await fetch("https://respektive.pw/scorecamp/");
        const json = await res.json();

        const rankings = json.data.map((row) => {
            const team = {
                ...row,
                rank: parseInt(row.rank.replace("#", "")),
                scoreGained: parseInt(row.scoreGained.replace(/,/g, "")),
                currentScore: parseInt(row.currentScore.replace(/,/g, "")),
                player1: {
                    ...row.player1,
                    scoreGained: parseInt(row.player1.scoreGained.replace(/,/g, "")),
                },
                player2: {
                    ...row.player2,
                    scoreGained: parseInt(row.player2.scoreGained.replace(/,/g, "")),
                },
            };

            return team;
        });

        cachedRankings = rankings;
        return rankings;
    } catch (error) {
        console.error("Error fetching rankings:", error);
        return cachedRankings || [];
    }
}
