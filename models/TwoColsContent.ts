import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';

export interface TwoColsContent {
    backgroundColor: ColorEnum;
    border?: Border;
    classes?: string[];
    headingTitleBorderColor?: ColorEnum;
    headingTitle?: string;
    headingCatchPhrase?: string;
    hasAsset?: boolean;
    hasDescriptionCards?: boolean;
    hasCardWithLogo?: boolean;
}
