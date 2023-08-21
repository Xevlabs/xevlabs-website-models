import { Border } from './Border';

interface TimelineItem {
    id: number;
    date: string;
    description: string;
}

export interface Timeline {
    id: number;
    timeline: TimelineItem[];
    border: Border;
}
