
export interface Button {
    id: number;
    text?: string;
    type?: 'LINK';
    hasArrow?: boolean;
    color?: 'PRIMARY' | 'ALTERNATE';
    url?: string;
}
