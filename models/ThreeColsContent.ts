import { ColorEnum } from '../enums/color-enum';

export interface ThreeColsContent {
    title: string;
    backgroundColor: ColorEnum;
    classes?: string[];
    phrase: string;
}
