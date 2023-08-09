import { Button } from './Button';
import { MediaInterface } from './MediaInterface';

export interface Card {
    id: number;
    logo?: { data: MediaInterface };
    title?: string;
    description?: string;
    button?: Button;
}
