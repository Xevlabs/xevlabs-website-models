import { Button } from './Button';

export interface TwoColsSection {
    id: number;
    content?: string;
    contentMobileOrder?: number;
    button?: Button;
    buttonMobileOrder?: number;
    dense?: boolean;
}
