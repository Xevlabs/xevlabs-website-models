import { MediaInterface } from './MediaInterface';
import { HubspotForm } from './HubspotForm';

export interface Cta {
    id: number;
    backgroundImage?: { data: MediaInterface };
    url?: string;
    description?: string;
    hasArrow?: boolean;
    hubspotForm?: HubspotForm;
}
