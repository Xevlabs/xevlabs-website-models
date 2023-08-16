import { ColorEnum } from '../enums/color-enum';
import { TextAlignEnum } from '../enums/textAlign-enum';
import { MediaInterface } from './MediaInterface';
import { Border } from './Border';

export interface LogoWithPicture {
    id: number;
    text?: string;
    logo: { data: MediaInterface };
    backgroundColor: ColorEnum;
    border: Border;
    textAlign: TextAlignEnum;
}
