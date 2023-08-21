import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { MediaInterface } from './MediaInterface';

export interface CardWithLogo {
    id: number;
    title?: string;
    backgroundColor: ColorEnum;
    pictures?: { data: [MediaInterface] };
    border?: Border;
}
