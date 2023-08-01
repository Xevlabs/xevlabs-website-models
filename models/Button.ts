
export interface Button {
    id: number;
    text?: string;
    type?: 'BUTTON';
    hasArrow?: boolean;
    color?: 'PRIMARY' | 'ALTERNATE';
    url?: string;
}
