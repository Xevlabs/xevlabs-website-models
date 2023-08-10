import { IconEnum } from '../enums';
import { colorEnum } from '../enums/color-enum';

export interface Button {
    id: number;
    text?: string;
    type?: 'LINK' | 'CIRCLE';
    icon?: IconEnum;
    color?: colorEnum;
    url?: string;
    overlayColor?: colorEnum;
}
