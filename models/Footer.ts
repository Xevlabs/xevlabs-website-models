import { MediaInterface } from './MediaInterface';
import { colorEnum } from '~/typings/enums/color-enum';
import { Links } from '~/typings/models/Links';
import { Cta } from '~/typings/models/Cta';

export interface Footer {
    id: number;
    logo: { data: MediaInterface };
    backgroundColor?: colorEnum;
    activateLinks?: boolean;
    firstLinks?: Links[];
    secondLinks?: Links[];
    thirdLinks?: Links[];
    CTA: Cta;
}
