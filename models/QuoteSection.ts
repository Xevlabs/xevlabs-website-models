import { ColorEnum } from '../enums/color-enum';
import { Border } from './Border';
import { Badge } from './Badge';

export interface QuoteSection {
    id: number;
    badge?: Badge;
    catchPhrase?: string;
    border?: Border;
    backgroundColor?: ColorEnum;
}
