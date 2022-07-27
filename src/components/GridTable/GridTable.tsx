import React, { FC } from 'react';
import { Grid } from '@mui/material';

interface IGridProps {
	children: any;
	sx?: any;
}

const GridTable: FC<IGridProps> = (props) => {
  const { children, sx } = props;
  return <Grid container {...sx}>{children}</Grid>;
};



export default GridTable;
