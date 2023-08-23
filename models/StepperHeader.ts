import { ColorEnum } from '../enums/color-enum';
import { StepperCard } from './StepperCard';
import { Border } from './Border';
import { SectionHeading } from './SectionHeading';

export interface StepperHeader {
    id: number;
    headline?: SectionHeading;
    step?: number;
    border?: Border;
    card: StepperCard;
    backgroundColor?: ColorEnum;
}
