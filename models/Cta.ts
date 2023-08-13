import { ColorEnum } from '../enums/color-enum';
import { MediaInterface } from './MediaInterface';

export interface Cta {
    id: number;
    color?: ColorEnum;
    backgroundImage?: { data: MediaInterface };
    url?: string;
    description?: string;
    hasArrow?: boolean;
}
