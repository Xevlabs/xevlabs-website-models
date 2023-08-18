import { Border } from './Border';
import { SectionCustomProperties } from './SectionCustomProperties';

export interface SectionProps {
    title?: string;
    background?: string;
    border?: Border;
    sectionTitle?: SectionCustomProperties;
}
