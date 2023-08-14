import { Hero } from './Hero';
import { PageColorEnum } from '~/typings';

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
