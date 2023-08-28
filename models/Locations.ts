import { Location } from './Location';
import { Border } from './Border';

export interface Locations {
    id: number;
    locations: Location[];
    borders: Border;
}
