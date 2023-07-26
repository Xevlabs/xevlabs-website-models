
export interface Button {
    id: number;
    text?: string;
    type?: 'BUTTON' | 'EXTERNAL_LINK' | 'INTERNAL_LINK';
    hasArrow?: boolean;
    color?: 'PRIMARY' | 'ALTERNATE';
    url?: string;
    size?: 'SMALL' | 'REGULAR';
    version?: 'PLAIN' | 'OUTLINE';
}
