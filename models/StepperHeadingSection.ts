import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { SectionHeading } from './SectionHeading';

export interface StepperHeadingSection {
    id: number;
    heading?: SectionHeading;
    border?: Border;
    backgroundColor?: ColorEnum;
    step?: number;
}
