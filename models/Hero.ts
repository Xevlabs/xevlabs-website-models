import {Media} from "./Media";
import {Button} from "./Button";

export interface Hero {
    id: number;
    pictures?: {data: [Media]}
    text?: string
    button?: Button
}
