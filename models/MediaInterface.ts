import { MediaFormat } from './MediaFormat';
import { StrapiComponent } from '~/typings/models/StrapiComponent';

export interface MediaInterface extends StrapiComponent {
    id: number;
    attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: { thumbnail: MediaFormat; medium: MediaFormat; small: MediaFormat };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
