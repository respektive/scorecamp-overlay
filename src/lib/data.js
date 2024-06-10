import csvToJson from "convert-csv-to-json";

export async function getRankings() {
    const res = await fetch("https://respektive.pw/scorecamp/");
    const json = await res.json();

    const data = json.map((row) => {
        return {
            username: row.username,
            user_id: row.user_id,
            score_at_start: row.starting_ranked_score,
            current_score: row.ranked_score,
            gained_score: row.gained_score,
        };
    });

    const rankings = data
        .sort((a, b) => b.gained_score - a.gained_score)
        .map((u, i) => {
            return {
                ...u,
                rank: i + 1,
            };
        });

    return rankings;
}
