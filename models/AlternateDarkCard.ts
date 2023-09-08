import { StrapiComponent } from '~/typings/models/StrapiComponent';

export interface AlternateDarkCard extends Partial<StrapiComponent> {
    title?: string;
    description?: string;
    hasAsset?: boolean;
}
