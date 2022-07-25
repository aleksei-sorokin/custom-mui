import React, { FC } from 'react';
import { Grid } from '@mui/material';

const GridTable: FC<{props: any}> = (props) => {
  const { children } = props;
  return <Grid container>{children}</Grid>;
};



export default GridTable;