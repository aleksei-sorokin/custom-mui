import React, { ElementType } from 'react';
import { Grid } from '@mui/material';

const GridTable: ElementType = (props) => {
  const { children } = props;
  return <Grid container>{children}</Grid>;
};



export default GridTable;
