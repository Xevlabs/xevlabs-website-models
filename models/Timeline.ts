interface TimelineItem {
    id: number;
    date: string;
    description: string;
}

export interface Timeline {
    id: number;
    timeline: TimelineItem[];
}
