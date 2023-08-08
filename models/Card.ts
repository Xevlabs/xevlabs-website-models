import { Button } from './Button';
import { Media } from './Media';

export interface Card {
    id: number;
    logo?: { data: Media };
    title?: string;
    description?: string;
    button?: Button;
}
