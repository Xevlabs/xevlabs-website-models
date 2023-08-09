import { Button } from "./Button";
import { Picture } from "./Picture";

export interface PicturesWithDescription {
    id: number;
    pictures: Picture[];
    title?: string;
    catchphrase?: string;
    description?: string
    button?: Button
}