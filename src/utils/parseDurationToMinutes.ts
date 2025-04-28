/**
 * ISO8601 Duration文字列（例: "PT5M"）を分単位の数値に変換する
 *
 * @param duration ISO8601 duration string (例: "PT2H30M")
 * @returns 分数（number）
 */
export function parseDurationToMinutes(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);
  return hours * 60 + minutes + seconds / 60;
}
