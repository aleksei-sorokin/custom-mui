import { FC } from 'react';
interface ITdProps {
    children: any;
    width: number | boolean;
    type?: string;
    alignItems?: string;
    justifyContent?: string;
    textAlign?: string;
}
declare const GridTableCell: FC<ITdProps>;
export default GridTableCell;
