import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';

export interface SectionProps {
    title?: string;
    background?: string;
    border?: Border;
    headingTitleBorderColor?: ColorEnum;
    headingCatchPhrase?: string;
    overflow?: boolean;
    noPadding?: boolean;
    classList?: string[];
    mobilePadding?: boolean;
}
