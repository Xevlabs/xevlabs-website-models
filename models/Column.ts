import { ContentAlignEnum } from '../enums/contentAlign-enum';
import { Button } from './Button';
import { MediaInterface } from './MediaInterface';

export interface Column {
    id: number;
    content?: string;
    contentMobileOrder?: number;
    button?: Button;
    buttonMobileOrder?: number;
    dense?: boolean;
    contentText?: string;
    contentImage?: { data: MediaInterface };
    imageRound?: boolean;
    imageAlignment?: ContentAlignEnum;
    imageFullHeight?: boolean;
}
