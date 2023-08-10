import { colorEnum } from '../enums/color-enum';

export interface CatchPhraseCross {
    id: number;
    title?: string;
    subtitles?: string;
    crossColor?: colorEnum;
}
