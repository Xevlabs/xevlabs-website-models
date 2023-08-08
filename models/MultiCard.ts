import { CardOverlay } from './CardOverlay';
import {colorEnum} from "~/typings/enums/color-enum";

export interface MultiCard {
    id: number;
    title?: string;
    catchPhrase?: string;
    cards: CardOverlay[];
    backgroundColor?: colorEnum;
}
