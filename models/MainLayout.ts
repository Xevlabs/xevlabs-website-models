import { Navbar } from './Navbar';
import { Footer } from './Footer';

export interface MainLayout {
    id: number;
    attributes: {
        navbar: Navbar;
        footer: Footer;
        locale: string;
        localizations?: { data: MainLayout[] };
    };
}
