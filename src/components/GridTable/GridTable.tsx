import React, { FC, Fragment } from 'react';
import { Grid } from '@mui/material';

interface IGridProps {
	children: any;
	sx?: any;
}

const GridTable: FC<IGridProps> = ({children, sx}) => {
  return <Fragment><Grid container {...sx}>{children}</Grid></Fragment>;
};

export default GridTable;
