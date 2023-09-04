import { Button } from './Button';
import { Project } from './Project';
import { Border } from './Border';

export interface ProjectsSection {
    id: number;
    border?: Border;
    title?: string;
    catchPhrase?: any;
    content?: any;
    projects: { data: Project[] };
    button?: Button;
}
