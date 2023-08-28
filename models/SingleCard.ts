import { Border } from './Border';
import { StrapiComponent } from '~/typings/models/StrapiComponent';

export interface SingleCard extends StrapiComponent {
    content: string;
    title: string;
    borders: Border;
}
