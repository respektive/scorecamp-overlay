import csvToJson from "convert-csv-to-json";

export async function getRankings() {
    const csv = await fetch(
        "https://docs.google.com/spreadsheets/d/1DVJcFkyHP3dRsJdaKjz2EwWTNBcJVrO1_Eg3A9r6Szc/export?format=csv&id=1DVJcFkyHP3dRsJdaKjz2EwWTNBcJVrO1_Eg3A9r6Szc&gid=0"
    );

    const csv_string = await csv.text();
    const json = csvToJson
        .indexHeader(1)
        .fieldDelimiter(",")
        .supportQuotedField(true)
        .formatValueByType(true)
        .csvStringToJson(csv_string);

    const data = json.map((row) => {
        return {
            username: row.Username,
            user_id: row.UserID,
            score_at_start: parseInt(row.ScoreatStart.replaceAll(",", "")),
            current_score: parseInt(row.currentelim.replaceAll(",", "")),
            gained_score:
                parseInt(row.currentelim.replaceAll(",", "")) -
                parseInt(row.ScoreatStart.replaceAll(",", "")),
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
