import { GridProps } from '@mui/material';
import { FC } from 'react';
interface ITdProps extends GridProps {
    children: any;
    type?: string;
}
declare const GridTableCell: FC<ITdProps>;
export default GridTableCell;
