import { getRankings } from "$lib/data";
import { dev } from '$app/environment';

function randomGained() {
    return Math.floor(Math.random() * 100000000) + 1;
}

const mockRankings = [
    {
        username: "BanchoBot",
        user_id: 3,
        rank: 1,
        gained_score: 13000000000,
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
        gained_score: 5000000000,
    }
];

const getMockRankings = () => {
    mockRankings[0].gained_score += randomGained();
    mockRankings[1].gained_score += randomGained() * 2;
    mockRankings[2].gained_score += Math.floor(randomGained() / 10);

    return mockRankings;
}

export async function load({ depends }) {
    depends("data:rankings");

    return {
        rankings: dev ? getMockRankings() : await getRankings(),
    };
}
