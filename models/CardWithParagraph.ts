import { TwoColsSection } from './TwoColsSection';
import { Border } from './Border';
import { ColorEnum } from '../enums/color-enum';

export interface CardWithParagraph {
    id: number;
    boder?: Border;
    columns: TwoColsSection[];
    backgroundColor?: ColorEnum;
}
