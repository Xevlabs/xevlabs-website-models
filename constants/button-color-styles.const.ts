import { ColorEnum } from '../enums/color-enum';
import { ButtonColorStyles } from '../models/ButtonColorStyles';

type ButtonColorStylesConstant = {
    [key in ColorEnum]: ButtonColorStyles;
};
export const BUTTON_COLOR_STYLES_CONSTANT: ButtonColorStylesConstant = {
    [ColorEnum.ALTERNATE]: {
        backgroundColor: 'black',
        hoverBackgroundColor: 'contrast',
        textColor: 'white',
        hoverTextColor: 'slate-200',
    },
    [ColorEnum.LIGHTGRAY]: {
        backgroundColor: 'gray-300',
        hoverBackgroundColor: 'gray-900',
        textColor: 'black',
        hoverTextColor: 'white',
    },
    [ColorEnum.DARKGRAY]: {
        backgroundColor: 'darkgray-500',
        hoverBackgroundColor: 'gray-900',
        textColor: 'gray-800',
        hoverTextColor: 'gray-800',
    },
    [ColorEnum.CONTRAST]: {
        backgroundColor: 'contrast',
        hoverBackgroundColor: 'gray-900',
        textColor: 'white',
        hoverTextColor: 'white',
    },
    [ColorEnum.GRAY]: {
        backgroundColor: 'darkgray-500',
        hoverBackgroundColor: 'darkgray-300',
        textColor: 'white',
        hoverTextColor: 'white',
    },
    [ColorEnum.DEFAULT]: {
        backgroundColor: 'primary-500',
        hoverBackgroundColor: 'darkgray-500',
        textColor: 'white',
        hoverTextColor: 'black',
    },
    [ColorEnum.PRIMARY]: {
        backgroundColor: 'primary-500',
        hoverBackgroundColor: 'primary-500',
        textColor: 'white',
        hoverTextColor: 'black',
    },
    [ColorEnum.WHITE]: {
        backgroundColor: 'white',
        hoverBackgroundColor: 'black',
        textColor: 'black',
        hoverTextColor: 'white',
    },
};
