import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { SectionCustomProperties } from './SectionCustomProperties';

export interface TwoColsContent {
    backgroundColor: ColorEnum;
    border: Border;
    classes?: string[];
    sectionTitle?: SectionCustomProperties;
    description?: string;
}
