import { colorEnum } from '../enums/color-enum';
import { MediaInterface } from './MediaInterface';

export interface Cta {
    id: number;
    color?: colorEnum;
    backgroundImage?: { data: MediaInterface };
    url?: string;
    description?: string;
    hasArrow?: boolean;
}
