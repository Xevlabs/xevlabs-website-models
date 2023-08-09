import { MediaInterface } from "./MediaInterface";


export interface Picture {
    image: {data: MediaInterface};
    cornerColor?: 'PRIMARY' | 'SECONDARY';
}