import { MediaInterface } from './MediaInterface';

export interface Collaborator {
    id: number;
    firstName?: string;
    lastName?: string;
    position?: string;
    image?: { data: MediaInterface };
    locale: string;
    localizations?: { data: Collaborator[] };
}
