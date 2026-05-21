import { getRankings } from "$lib/data";
import { dev } from "$app/environment";

function randomGained() {
    return Math.floor(Math.random() * 100000000) + 1;
}

const mockRankings = [
    {
        rank: "#1",
        teamId: "1",
        teamName: "Long season fanclub",
        currentScore: "179,761,621,828",
        scoreGained: "0",
        eliminated: false,
        untilNext: "",
        player1: { name: "Arithmophobie", scoreGained: "0", contribution: "0,00%" },
        player2: { name: "Kuzik", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#2",
        teamId: "2",
        teamName: "NOUVO TOP PLAAAAAY LETS GOOOOO",
        currentScore: "845,602,085,119",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { name: "ZaBoo", scoreGained: "0", contribution: "0,00%" },
        player2: { name: "Columbina", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#3",
        teamId: "3",
        teamName: ":PUNTOS:",
        currentScore: "418,531,038,999",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { name: "Fayar", scoreGained: "0", contribution: "0,00%" },
        player2: { name: "MwaCestTom", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#4",
        teamId: "4",
        teamName: "S C O E R F A R M E R",
        currentScore: "74,356,203,846",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { name: "NiklasDerFarmer", scoreGained: "0", contribution: "0,00%" },
        player2: { name: "the_dark_cookie", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#5",
        teamId: "5",
        teamName: "gupcrazy",
        currentScore: "338,853,812,453",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { name: "sumyeon", scoreGained: "0", contribution: "0,00%" },
        player2: { name: "weed machine", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#6",
        teamId: "6",
        teamName: "blue flame enjoyers",
        currentScore: "826,670,357,388",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { name: "respektive", scoreGained: "0", contribution: "0,00%" },
        player2: { name: "WitherFlower", scoreGained: "0", contribution: "0,00%" },
    },
];

const getMockRankings = () => {
    for (const team of mockRankings) {
        team.scoreGained = randomGained();
    }

    return mockRankings;
};

export async function load({ depends }) {
    depends("data:rankings");

    return {
        rankings: dev ? getMockRankings() : await getRankings(),
    };
}
