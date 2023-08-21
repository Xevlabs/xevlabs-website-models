import { Border } from './Border';

export interface SectionProps {
    title?: string;
    background?: string;
    border?: Border;
    overflow?: boolean;
    noPadding?: boolean;
    classList?: string[];
}
