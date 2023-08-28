import { StepperCard } from './StepperCard';
import { Badge } from './Badge';

export interface StepperContent {
    id: number;
    catchPhrase?: string;
    badge?: Badge;
    cards?: StepperCard[];
}
