import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { Column } from './Column';
import { SectionHeading } from './SectionHeading';

export interface TwoColsSection {
    id: number;
    border?: Border;
    columns: Column[];
    backgroundColor: ColorEnum;
    useAssetImage?: boolean;
}
