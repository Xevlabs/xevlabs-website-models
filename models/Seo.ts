import { MediaFormat } from './MediaFormat';
import { MetaSocial } from './MetaSocial';

export interface Seo {
    id: number;
    metaTitle: string;
    metaDescription: string;
    metaImage: { data: MediaFormat };
    metaSocial: MetaSocial[];
    keywords?: string;
    metaRobots?: string;
    structuredData?: { jsonLD?: any }[];
    metaViewport?: string;
    canonicalURL?: string;
}
