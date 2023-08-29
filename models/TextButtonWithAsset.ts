import { ColorEnum } from '../enums/color-enum';
import { Button } from './Button';
import { Border } from './Border';
import { MediaInterface } from './MediaInterface';

export interface TextButtonWithAsset {
    id: number;
    catchPhrase: string;
    description: string;
    backgroundColor: ColorEnum;
    button: Button;
    border: Border;
    useAssetImage?: boolean;
    picture: { data: MediaInterface };
}
