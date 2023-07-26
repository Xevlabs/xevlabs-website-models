import { Media } from './Media';
import {colorEnum} from "~/typings/enums/color-enum";

export interface Cta {
    id: number;
    color?: colorEnum
    backgroundImage?: { data: Media };
    url?: string;
    description?: string
}
