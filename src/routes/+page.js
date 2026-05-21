import { getRankings } from "$lib/data";
import { dev } from "$app/environment";

function randomGained() {
    return Math.floor(Math.random() * 100000000) + 1;
}

const getMockRankings = async () => {
    const mockRankings = await getRankings();
    for (const team of mockRankings) {
        team.scoreGained = randomGained();
    }

    return mockRankings;
};

export async function load({ depends }) {
    depends("data:rankings");

    return {
        rankings: dev ? await getMockRankings() : await getRankings(),
    };
}
