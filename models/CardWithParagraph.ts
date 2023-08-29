import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { Button } from './Button';
import { MediaInterface } from './MediaInterface';

export interface CardWithParagraph {
    id: number;
    button?: Button;
    border?: Border;
    title?: string;
    paragraph?: string;
    picture: { data: MediaInterface };
    backgroundColor: ColorEnum;
}
