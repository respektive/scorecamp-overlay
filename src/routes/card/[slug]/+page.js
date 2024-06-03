import { getRankings } from "$lib/data";

export async function load({ depends, params }) {
    depends("data:rankings");

    return {
        slug: params.slug.toLowerCase(),
        rankings: await getRankings(),
    };
}
