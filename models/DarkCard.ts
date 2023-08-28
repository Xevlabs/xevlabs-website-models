import { Button } from './Button';
import { StrapiComponent } from '~/typings/models/StrapiComponent';

export interface DarkCard extends Partial<StrapiComponent> {
    title?: string;
    content?: string;
    button?: Button;
}
