import { Testimonial } from './Testimonial';
import { Seo } from './Seo';
import { MediaInterface } from '~/typings';

export interface Project {
    id: number;
    attributes: {
        title?: string;
        client?: string;
        slug?: string;
        duration?: string;
        type?: 'WEB_APP' | 'MOBILE_APP' | 'DIGITAL_TRANSFORMATION' | 'ERP' | 'ECOMMERCE';
        clientType?: 'PME' | 'CORPORATE' | 'STARTUP';
        budget?: 'UNDER_50' | 'BETWEEN_50_100' | 'BETWEEN_100_150' | 'OVER_150';
        team?: string;
        addedValue?: any;
        desktopImage?: { data: MediaInterface };
        seo?: Seo;
        testimonial?: Testimonial;
        mobileImage?: { data: MediaInterface };
        locale: string;
        localizations?: { data: Project[] };
    };
}
