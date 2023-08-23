import { StepperContent } from './StepperContent';
import { StepperHeader } from './StepperHeader';

export interface StepperComponent {
    id: number;
    stepperHeader?: StepperHeader;
    stepperContent?: StepperContent;
}
