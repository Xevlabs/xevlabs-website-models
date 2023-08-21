import { IconEnum } from '../enums/icon-enum';
import { ButtonTypeEnum } from '../enums/button-type-enum';
import { ColorEnum } from '../enums/color-enum';

export interface Button {
    id: number;
    text?: string;
    type?: ButtonTypeEnum;
    icon?: IconEnum;
    color?: ColorEnum;
    url?: string;
    overlayColor?: ColorEnum;
}
