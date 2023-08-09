import { colorEnum } from '../enums/color-enum';
import { CardOverlay } from './CardOverlay';

export interface MultiCard {
    id: number;
    title?: string;
    catchPhrase?: string;
    cards: CardOverlay[];
    backgroundColor?: colorEnum;
}
