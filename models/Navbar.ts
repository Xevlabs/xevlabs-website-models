import { Media } from './Media';
import { Button } from './Button';

export interface Navbar {
    id: number;
    cta?: Button;
    logo?: { data: Media };
    title?: string;
}
