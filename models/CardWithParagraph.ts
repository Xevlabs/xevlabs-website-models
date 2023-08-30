import { ColorEnum } from '../enums/color-enum';
import { TwoColsSection } from './TwoColsSection';
import { Border } from './Border';

export interface CardWithParagraph {
    id: number;
    border?: Border;
    columns: TwoColsSection[];
    backgroundColor: ColorEnum;
}
