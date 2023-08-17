import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { SectionTitle } from './SectionTitle';

export interface TwoColsContent {
    backgroundColor: ColorEnum;
    border: Border;
    classes?: string[];
    sectionTitle?: SectionTitle;
    description?: string;
}
