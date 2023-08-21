import { Button } from './Button';
import {MediaFormat} from "./MediaFormat";

export interface PicturesWithDescription {
    id: number;
    pictures: MediaFormat[];
    title?: string;
    catchphrase?: string;
    description?: string;
    button: Button;
}
