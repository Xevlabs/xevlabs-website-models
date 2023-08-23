import { ColorEnum } from '../enums/color-enum';

export interface BadgeComponent {
    id: number;
    text?: string;
    backgroundColor?: ColorEnum;
    textColor?: ColorEnum;
}
