import React, { FC } from 'react';
import { Grid, GridProps } from '@mui/material';

const GridTable: FC<GridProps> = (props) => {
  const { children } = props;
  return <Grid container {...props}>{children}</Grid>;
};



export default GridTable;
