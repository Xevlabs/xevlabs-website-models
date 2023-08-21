import { ColorEnum } from '../enums/color-enum';
import { Button } from './Button';

export interface CatchPhraseCross {
    id: number;
    title?: string;
    subtitles?: string;
    crossColor?: ColorEnum;
    button?: Button;
}
