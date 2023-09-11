import { IconEnum } from '../enums/icon-enum';
import { ColorEnum } from '../enums/color-enum';
import { HubspotForm } from './HubspotForm';

export interface Button {
    id?: number;
    text?: string;
    hasOutline?: boolean;
    icon?: IconEnum;
    color?: ColorEnum;
    url?: string;
    hubspotForm?: HubspotForm;
}
