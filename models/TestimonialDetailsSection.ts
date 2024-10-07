import { Project } from './Project';
import { MediaInterface } from '~/typings';
import { Testimonial } from '~/typings/models/Testimonial';

export interface TestimonialDetailsSection {
    id: number;
    project?: { data: Project };
    title: string;
    content: string;
    subtitle: string;
    testimonial: Testimonial;
    excerptImage: { data: MediaInterface };
}
