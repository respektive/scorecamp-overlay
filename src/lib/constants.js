import { quintOut } from "svelte/easing";

const tweenSettings = {
    duration: 2500,
    easing: quintOut,
};

function getRankColour(rank) {
    if (rank === 1) {
        return "linear-gradient(180deg, #FFE600 0%, #ED82FF 100%)";
    } else if (rank <= 10) {
        return "linear-gradient(180deg, #97DCFF 0%, #ED82FF 100%)";
    } else if (rank <= 25) {
        return "linear-gradient(180deg, #A8F0EF 0%, #52E0DF 100%)";
    } else if (rank <= 50) {
        return "linear-gradient(180deg, #FFEE99 0%, #FFDD33 100%)";
    } else if (rank <= 75) {
        return "linear-gradient(180deg, #E0E0EB 0%, #A3A3C2 100%)";
    } else if (rank <= 100) {
        return "linear-gradient(180deg, #B88F7A 0%, #855C47 100%)";
    }

    return "#BAB2AB";
}

export { tweenSettings, getRankColour };
