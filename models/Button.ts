import { IconEnum } from '../enums';
import { ColorEnum } from '../enums/color-enum';

export interface Button {
    id: number;
    text?: string;
    type?: 'LINK' | 'CIRCLE';
    icon?: IconEnum;
    color?: ColorEnum;
    url?: string;
    overlayColor?: ColorEnum;
}
