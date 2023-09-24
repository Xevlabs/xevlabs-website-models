import { MediaInterface } from './MediaInterface';
import { Links } from './Links';
import { Button } from './Button';

export interface Navbar {
    id: number;
    logo: { data: MediaInterface };
    title?: string;
    firstMenu: Links[];
    secondMenu: Links[];
    close: string;
    open: string;
    contactButton: Button;
}
