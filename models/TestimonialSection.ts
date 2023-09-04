import { Project } from './Project';
import { Border } from './Border';
import { ColorEnum } from '~/typings';

export interface TestimonialSection {
    id: number;
    border?: Border;
    project: { data: Project };
    backgroundColor: ColorEnum;
}
