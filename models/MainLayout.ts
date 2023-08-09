import { Navbar } from '~/typings/models/Navbar';
import { Footer } from '~/typings/models/Footer';

export interface MainLayout {
    id: number;
    attributes: {
        navbar: Navbar;
        footer: Footer;
        locale: string;
        localizations?: { data: MainLayout[] };
    };
}
