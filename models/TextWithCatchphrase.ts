import { Button } from './Button';

export interface TextWithCatchphrase {
    id: number;
    title?: string;
    description?: string;
    catchphrase?: string;
    backgroundColor: string;
    button?: Button;
}
