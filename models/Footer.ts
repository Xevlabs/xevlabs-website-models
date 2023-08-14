import { ColorEnum } from '../enums/color-enum';
import { MediaInterface } from './MediaInterface';
import { Links } from './Links';
import { Cta } from './Cta';

export interface Footer {
    id: number;
    logo: { data: MediaInterface };
    backgroundColor?: ColorEnum;
    activateLinks?: boolean;
    firstLinks?: Links[];
    secondLinks?: Links[];
    thirdLinks?: Links[];
    CTA: Cta;
}
