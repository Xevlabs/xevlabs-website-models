import { MediaInterface } from './MediaInterface';
import { Links } from '~/typings';

export interface Navbar {
    id: number;
    logo: { data: MediaInterface };
    title?: string;
    firstMenu: Links[];
    secondMenu: Links[];
    close: string;
    open: string;
}
