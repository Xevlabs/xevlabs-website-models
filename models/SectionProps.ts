import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';

export interface SectionProps {
    title?: string;
    background?: string;
    border?: Border;
    headingTitleBorderColor?: ColorEnum;
    headingCatchPhrase?: string;
    headingStep?: number;
    overflow?: boolean;
    noPadding?: boolean;
    noYPadding?: boolean;
    noXPadding?: boolean;
    classList?: string[];
    noContent?: boolean;
    noMobilePadding?: boolean;
}
