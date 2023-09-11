import { BudgetEnum, ClientTypeEnum, ProjectTypeEnum } from '../enums';
import { Testimonial } from './Testimonial';
import { Seo } from './Seo';
import { MediaInterface } from './MediaInterface';
import { Hero } from './Hero';

export interface Project {
    id: number;
    attributes: {
        title?: string;
        client?: string;
        slug?: string;
        duration?: string;
        type?: ProjectTypeEnum;
        clientType?: ClientTypeEnum;
        budget?: BudgetEnum;
        team?: string;
        addedValue?: any;
        desktopImage?: { data: MediaInterface };
        seo?: Seo;
        testimonial?: Testimonial;
        mobileImage?: { data: MediaInterface };
        locale: string;
        localizations?: { data: Project[] };
        technologies?: string;
        hero?: Hero;
    };
}
