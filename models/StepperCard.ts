import { ColorEnum } from '../enums/color-enum';
import { BadgeComponent } from './BadgeComponent';
import { CardProps } from './CardProps';
import { Button } from './Button';
import { TextCollection } from './TextCollection';
import { MediaInterface } from './MediaInterface';

export interface StepperCard {
    id: number;
    title?: any;
    text: TextCollection[];
    picture?: { data: [MediaInterface] };
    button?: Button;
    props?: CardProps;
    badges: BadgeComponent[];
    backgroundColor?: ColorEnum;
}
