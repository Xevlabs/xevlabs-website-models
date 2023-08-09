import { colorEnum } from '../enums/color-enum';

export interface Button {
    id: number;
    text?: string;
    type?: 'LINK' | 'CIRCLE';
    hasArrow?: boolean;
    color?: colorEnum;
    url?: string;
    overlayColor?: colorEnum;
}
