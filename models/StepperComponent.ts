import { StepperContent } from './StepperContent';
import { StepperHeader } from './StepperHeader';

export interface StepperComponent {
    stepperHeader?: StepperHeader;
    stepperContent?: StepperContent;
}
