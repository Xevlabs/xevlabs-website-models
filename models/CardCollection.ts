import { colorEnum } from '../enums/color-enum';
import { Card } from './Card';

export interface CardCollection {
    id: number;
    title?: string;
    catchPhrase?: string;
    cards: Card[];
    backgroundColor?: colorEnum;
}
