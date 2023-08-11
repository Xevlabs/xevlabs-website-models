import { Button } from './Button';
import { MediaInterface } from './MediaInterface';
import { StrapiComponent } from './StrapiComponent';
import { Border } from './Border';

export interface Hero extends StrapiComponent {
    id: number;
    pictures?: { data: [MediaInterface] };
    text?: string;
    button: Button;
    border: Border;
}
