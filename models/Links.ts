import {typeEnum} from "~/typings/enums/type-enum";
import {colorEnum} from "~/typings/enums/color-enum";

export interface Links {
    id: number;
    target?: string;
    type?: typeEnum;
    color?: colorEnum;
    url?: string;
}
