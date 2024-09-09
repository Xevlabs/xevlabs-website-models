import { Border } from './Border';

export interface ArticleSummaryItem {
    id?: number;
    href: string;
    title: string;
    items: ArticleSummaryItem[];
}

export interface ArticleSummaryProps {
    title: string;
    border: Border;
    items?: ArticleSummaryItem[];
}
