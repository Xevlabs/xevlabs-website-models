import { AlternateDarkCard } from './AlternateDarkCard';
import { Border } from './Border';
import { SectionHeading } from './SectionHeading';

export interface SectionWithCards {
    id: number;
    heading: SectionHeading;
    border: Border;
    cards: AlternateDarkCard[];
}
