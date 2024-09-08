import { MetaSocial } from './MetaSocial';
import { MediaInterface } from '~/typings';

export interface Seo {
    id: number;
    metaTitle: string;
    metaDescription: string;
    metaImage: {
        data: MediaInterface;
    };
    metaSocial: MetaSocial[];
    keywords?: string;
    metaRobots?: string;
    structuredData?: { jsonLD?: any }[];
    metaViewport?: string;
    canonicalURL?: string;
}
