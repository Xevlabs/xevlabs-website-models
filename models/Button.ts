import {colorEnum} from "~/typings/enums/color-enum";

export interface Button {
    id: number;
    text?: string;
    type?: 'LINK';
    hasArrow?: boolean;
    color?: colorEnum;
    url?: string;
}
