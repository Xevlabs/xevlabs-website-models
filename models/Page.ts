import { Hero } from './Hero';
import { PageColorEnum } from '../enums/page-color.enum';

export interface Page {
    id: number;
    attributes: {
        slug?: string;
        content: Hero[];
        locale: string;
        mainColor: PageColorEnum;
        localizations?: { data: Page[] };
    };
}
