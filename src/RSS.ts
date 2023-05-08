/**
 * IT IS DEFINITION FOR RSS FEED
 * If you want to get more feed, please add it
 **/
import { RSSItem } from "./index";

const BASE_URL = "https://cwthreatint.github.io/github-search-rss";
// Query references
// https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax
// https://docs.github.com/en/github/searching-for-information-on-github/about-searching-on-github
// TYPE references
// https://docs.github.com/en/graphql/reference/queries#searchresultitemconnection
export const SEARCH_ITEMS: RSSItem[] = [
    // Issue
    {
        title: "CVE-2023 FEED",
        query: "CVE-2023",
        TYPE: "ISSUE",
        link: `${BASE_URL}/cve2023.json`,
        homepage: "https://github.com/search?o=desc&q=CVE-2023&s=updated&type=Repositories"
    }
];
