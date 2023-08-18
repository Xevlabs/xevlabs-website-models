import { ColorEnum } from '../enums/color-enum';
import { DarkCard } from './DarkCard';
import { SectionCustomProperties } from './SectionCustomProperties';

export interface DescriptionWithCard {
    id: number;
    sectionCustomProps?: SectionCustomProperties;
    description?: string;
    cards: DarkCard[];
    backgroundColor: ColorEnum;
}
