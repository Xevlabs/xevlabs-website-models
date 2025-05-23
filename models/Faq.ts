import { ColorEnum } from '../enums/color-enum';

export interface Question {
    title: string;
    content: string;
}

export interface Faq {
    id: number;
    title: string;
    questions: Question[];
    phrase: string;
    backgroundColor: ColorEnum;
}
