import { colorEnum } from '../enums/color-enum';
import { Button } from './Button';

export interface CardOverlay {
    id: number;
    title?: string;
    description?: string;
    button?: Button;
    backgroundColor?: colorEnum;
    overlayColor?: colorEnum;
}
