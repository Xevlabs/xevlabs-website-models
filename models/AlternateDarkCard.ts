import { StrapiComponent } from '~/typings/models/StrapiComponent';
import { Button } from '~/typings';

export interface AlternateDarkCard extends Partial<StrapiComponent> {
    title?: string;
    description?: string;
    hasAsset?: boolean;
    button?: Button;
}
