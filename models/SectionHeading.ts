import { ColorEnum } from '../enums/color-enum';

export interface SectionHeading {
    id: number;
    titleBorderColor?: ColorEnum;
    title?: string;
    catchPhraseHeading?: string;
    step?: number;
}
