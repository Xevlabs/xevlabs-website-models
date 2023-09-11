import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { StepperCard } from './StepperCard';

export interface StepperCardSection {
    id: number;
    cards: StepperCard[];
    border?: Border;
    backgroundColor: ColorEnum;
}
