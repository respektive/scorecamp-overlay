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
        player1: { id: "9910665", name: "Arithmophobie", scoreGained: "0", contribution: "0,00%" },
        player2: { id: "33606826", name: "Kuzik", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#2",
        teamId: "2",
        teamName: "NOUVO TOP PLAAAAAY LETS GOOOOO",
        currentScore: "845,638,520,637",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { id: "13344661", name: "ZaBoo", scoreGained: "0", contribution: "0,00%" },
        player2: { id: "11934348", name: "Columbina", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#3",
        teamId: "3",
        teamName: ":PUNTOS:",
        currentScore: "418,531,038,999",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { id: "12674517", name: "Fayar", scoreGained: "0", contribution: "0,00%" },
        player2: { id: "12280995", name: "MwaCestTom", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#4",
        teamId: "4",
        teamName: "S C O E R F A R M E R",
        currentScore: "74,363,234,187",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { id: "22587629", name: "NiklasDerFarmer", scoreGained: "0", contribution: "0,00%" },
        player2: { id: "11086206", name: "the_dark_cookie", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#5",
        teamId: "5",
        teamName: "gupcrazy",
        currentScore: "338,853,812,453",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { id: "12487726", name: "sumyeon", scoreGained: "0", contribution: "0,00%" },
        player2: { id: "10931846", name: "weed machine", scoreGained: "0", contribution: "0,00%" },
    },
    {
        rank: "#6",
        teamId: "6",
        teamName: "blue flame enjoyers",
        currentScore: "826,670,357,388",
        scoreGained: "0",
        eliminated: false,
        untilNext: "+0",
        player1: { id: "1023489", name: "respektive", scoreGained: "0", contribution: "0,00%" },
        player2: { id: "9991650", name: "WitherFlower", scoreGained: "0", contribution: "0,00%" },
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
