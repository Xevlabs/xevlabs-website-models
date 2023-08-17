import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { DarkCard } from './DarkCard';
import { SectionTitle } from './SectionTitle';

export interface DescriptionWithCard {
    id: number;
    title?: SectionTitle;
    description?: string;
    cards: DarkCard[];
    border: Border;
    backgroundColor: ColorEnum;
}
