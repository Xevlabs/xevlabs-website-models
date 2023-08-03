import { Button } from "./Button";

export interface TextBlock {
    id: number,
    title?: string,
    description?: string,
    catchphrase?: string,
    backgroundColor?: string,
    button?: Button
}