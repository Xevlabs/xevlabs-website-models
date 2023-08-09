import { colorEnum } from '../enums/color-enum';

export interface Links {
    id: number;
    target?: string;
    color?: colorEnum;
    url?: string;
}
