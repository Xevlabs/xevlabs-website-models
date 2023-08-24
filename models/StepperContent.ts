import { Border } from './Border';
import { StepperCard } from './StepperCard';
import { BadgeComponent } from './BadgeComponent';

export interface StepperContent {
    id: number;
    catchPhrase?: string;
    badge?: BadgeComponent;
    cards?: StepperCard[];
    border?: Border;
}
