import { ColorEnum } from '../enums/color-enum';
import { Button } from './Button';

export interface DarkCard {
    id: number;
    title: string;
    button: Button;
    backgroundColor: ColorEnum;
}
