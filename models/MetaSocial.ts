import { MediaFormat } from './MediaFormat';

export interface MetaSocial {
    id: number;
    socialNetwork: 'Facebook' | 'Twitter';
    title: string;
    description: string;
    image?: { data: MediaFormat };
}
