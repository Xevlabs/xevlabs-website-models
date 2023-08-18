import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';

export interface SectionProps {
    title?: string;
    background?: string;
    border?: Border;
    headingTitleBorderColor?: ColorEnum;
    headingTitle?: string;
    headingCatchPhrase?: string;
    overflow?: boolean;
}
