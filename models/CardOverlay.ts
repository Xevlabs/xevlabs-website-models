import { Button } from './Button';
import { colorEnum } from '~/typings/enums/color-enum';

export interface CardOverlay {
    id: number;
    title?: string;
    description?: string;
    button?: Button;
    backgroundColor?: colorEnum;
    overlayColor?: colorEnum;
}
