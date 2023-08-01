import { Hero } from "./Hero";

export interface Page {
    id: number;
    attributes: {
        slug?: string;
        content: Hero[];
        locale: string;
        localizations?: { data: Page[] }
    }
}
