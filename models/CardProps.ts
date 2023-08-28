import { SizeGridEnum } from '../enums/size-grid-enum';

export interface CardProps {
    id: number;
    roundedTopLeft?: boolean;
    roundedTopRight?: boolean;
    roundedBottomLeft?: boolean;
    roundedBottomRight?: boolean;
    sizePerGrid?: SizeGridEnum;
}
