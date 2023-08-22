import { IconEnum } from '../enums/icon-enum';
import { ColorEnum } from '../enums/color-enum';

export interface Button {
    id: number;
    text?: string;
    hasOutline?: boolean;
    icon?: IconEnum;
    color?: ColorEnum;
    url?: string;
}
