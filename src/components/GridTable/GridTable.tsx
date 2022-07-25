import React, { ElementType } from 'react';
import { Grid } from '@mui/material';

const GridTable: ElementType = (props) => {
  const { children } = props;
  return <Grid container {...props}>{children}</Grid>;
};



export default GridTable;
