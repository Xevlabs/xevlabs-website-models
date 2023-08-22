import { ColorEnum } from '../enums/color-enum';

interface ButtonColorStyle {
    backgroundColor: string;
    hoverBackgroundColor: string;
    textColor: string;
    hoverTextColor: string;
}

export interface ButtonColorStyles {
    [ColorEnum.ALTERNATE]: ButtonColorStyle;
    [ColorEnum.LIGHTGRAY]: ButtonColorStyle;
    [ColorEnum.DARKGRAY]: ButtonColorStyle;
    [ColorEnum.CONTRAST]: ButtonColorStyle;
    [ColorEnum.GRAY]: ButtonColorStyle;
    [ColorEnum.DEFAULT]: ButtonColorStyle;
    [ColorEnum.PRIMARY]: ButtonColorStyle;
    [ColorEnum.WHITE]: ButtonColorStyle;
}
