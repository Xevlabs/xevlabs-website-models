import { colorEnum } from '../enums/color-enum';

export interface Border {
    id: number;
    color: colorEnum;
    roundedTopLeft: boolean;
    roundedTopRight: boolean;
    roundedBottomLeft: boolean;
    roundedBottomRight: boolean;
    activateBorder: boolean;
}
