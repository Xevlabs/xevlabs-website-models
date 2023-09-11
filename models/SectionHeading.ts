import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';

export interface SectionHeading {
    id: number;
    titleBorderColor?: ColorEnum;
    title?: string;
    catchPhraseHeading?: string;
    border?: Border;
}
