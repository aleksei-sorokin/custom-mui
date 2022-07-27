import React, { FC } from 'react';
import { Grid as GridMui, GridProps, styled } from '@mui/material';

const GridTable: FC<GridProps> = (props) => (
  <Grid container {...props}>
    {props.children}
  </Grid>
);

const Grid = styled(GridMui)`
  margin-bottom: 28px;
`;

export default GridTable;
