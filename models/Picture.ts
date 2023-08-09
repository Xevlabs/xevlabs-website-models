import { Media } from "./Media";

export interface Picture {
    image: {data: Media}
    cornerColor?: 'PRIMARY' | 'SECONDARY'
}