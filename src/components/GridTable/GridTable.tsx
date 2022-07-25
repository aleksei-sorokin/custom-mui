import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

const GridTable = (props: any) => {
  const { children } = props;
  return <Grid container>{children}</Grid>;
};



export default GridTable;
