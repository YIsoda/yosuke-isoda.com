import presentationsJsonItems from "./presentations.json";
import type { PresentationInfo } from "./presentationInfo";

export const PresentationInfos: PresentationInfo[] = presentationsJsonItems
	.map(
		(item) =>
		({
			titleContent: item.title,
			eventTitle: item["container-title"],
			date: toDate(item.issued["date-parts"]),
			url: item.URL,
			author: item.author,
			citationKey: item["citation-key"]
		})
	);

function toDate(rawDate: (string | number)[][]): Date {
	const y = typeof rawDate[0][0] === "string" ? parseInt(rawDate[0][0]) : rawDate[0][0];
	const m = typeof rawDate[0][1] === "string" ? parseInt(rawDate[0][1]) : rawDate[0][1];
	const d = typeof rawDate[0][2] === "string" ? parseInt(rawDate[0][2]) : rawDate[0][2];
	return new Date(y, m - 1, d);
}