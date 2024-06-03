import { getRankings } from "$lib/data";

export async function load({ depends }) {
    depends("data:rankings");

    return {
        rankings: await getRankings(),
    };
}
