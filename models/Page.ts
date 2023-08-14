import { Seo } from '../models/Seo';
import { PageColorEnum } from '../enums/page-color.enum';
import { Hero } from './Hero';

export interface Page {
    id: number;
    attributes: {
        slug?: string;
        content: Hero[];
        locale: string;
        seo?: Seo;
        mainColor: PageColorEnum;
        localizations?: { data: Page[] };
    };
}
