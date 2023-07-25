import { Media } from './Media';

export interface Navbar {
    id: number;
    logo?: { data: Media };
    title?: string;
}
