import {Navbar} from "~/typings/models/Navbar";

export interface MainLayout {
    id: number;
    attributes: {
        navbar?: Navbar;
        locale: string;
        localizations?: { data: MainLayout[] }
    }
}
