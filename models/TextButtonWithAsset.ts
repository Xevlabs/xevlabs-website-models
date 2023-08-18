import { ColorEnum } from '../enums/color-enum';
import { Button } from './Button';
import { Border } from './Border';

export interface TextButtonWithAsset {
    id: number;
    catchPhrase: string;
    description: string;
    backgroundColor: ColorEnum;
    button: Button;
    border: Border;
    useAssetImage?: boolean;
}
