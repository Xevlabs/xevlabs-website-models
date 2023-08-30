import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { Column } from './Column';

export interface TwoColsSection {
    id: number;
    border?: Border;
    columns: Column[];
    backgroundColor: ColorEnum;
}
