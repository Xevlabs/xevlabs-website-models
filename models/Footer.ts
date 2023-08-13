import { MediaInterface } from './MediaInterface';
import { Links } from './Links';
import { Cta } from './Cta';
import { ColorEnum } from '~/typings';

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
