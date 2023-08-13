import { ColorEnum } from '../enums/color-enum';

export interface Links {
    id: number;
    target?: string;
    color?: ColorEnum;
    url?: string;
}
