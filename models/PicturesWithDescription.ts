import { Button } from './Button';
import { MediaInterface } from './MediaInterface';

export interface PicturesWithDescription {
    id: number;
    pictures: MediaInterface[];
    title?: string;
    catchphrase?: string;
    description?: string;
    button: Button;
}
