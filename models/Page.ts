import { Seo } from '../models/Seo';
import { PageColorEnum } from '../enums/page-color.enum';

export interface Page {
    id: number;
    attributes: {
        slug?: string;
        content: any[];
        locale: string;
        seo?: Seo;
        mainColor: PageColorEnum;
        localizations?: { data: Page[] };
    };
}
