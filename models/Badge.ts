import { ColorEnum } from '../enums/color-enum';

export interface Badge {
    id?: number;
    title: string;
    textColor?: ColorEnum;
    backgroundColor?: ColorEnum;
    small?: boolean;
}
