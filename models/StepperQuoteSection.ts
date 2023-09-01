import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { Badge } from './Badge';

export interface StepperQuoteSection {
    id: number;
    badge?: Badge;
    catchPhrase?: string;
    border?: Border;
    backgroundColor?: ColorEnum;
}
