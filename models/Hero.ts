import { ContentAlignEnum } from '../enums/contentAlign-enum';
import { Button } from './Button';
import { MediaInterface } from './MediaInterface';
import { StrapiComponent } from './StrapiComponent';
import { Border } from './Border';

export interface Hero extends StrapiComponent {
    id: number;
    logos?: { data: [MediaInterface] };
    text?: string;
    button: Button;
    border: Border;
    textAlign: ContentAlignEnum;
    image?: { data: MediaInterface };
    imageAlign?: 'DEFAULT' | 'LEFT' | 'BOTTOM';
    announcement?: Button;
}
