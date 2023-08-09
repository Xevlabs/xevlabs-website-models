import { Card } from './Card';
import { colorEnum } from '~/typings/enums/color-enum';

export interface CardCollection {
    id: number;
    title?: string;
    catchPhrase?: string;
    cards: Card[];
    backgroundColor?: colorEnum;
}
