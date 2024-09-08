import { MediaFormat } from './MediaFormat';
import { StrapiComponent } from './StrapiComponent';

export interface MediaInterface extends StrapiComponent {
    id: number;
    attributes: MediaFormat;
}
