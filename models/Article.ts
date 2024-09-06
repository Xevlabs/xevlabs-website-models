import { Border } from './Border';

export interface Article {
    content: string;
    border: Border;
    title?: string;
    subtitle?: string;
}
