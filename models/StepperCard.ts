import { ColorEnum } from '../enums/color-enum';
import { Badge } from './Badge';
import { CardProps } from './CardProps';
import { Button } from './Button';
import { TextCollection } from './TextCollection';
import { MediaInterface } from './MediaInterface';

export interface StepperCard {
    title?: string;
    text: TextCollection[];
    picture: { data: MediaInterface };
    button: Button;
    props?: CardProps;
    badges: Badge[];
    backgroundColor: ColorEnum;
    fullWidth: boolean;
}
