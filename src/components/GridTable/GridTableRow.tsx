import { Grid as GridMui, styled } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '../../theme/colorsLight';

interface ITrProps {
  children: any;
  type?: string;
}

const GridTableRow: FC<ITrProps> = (props) => {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

const Grid = styled(GridMui)<{ type?: string }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  box-shadow: ${(props) => (props.type === 'thead' ? '' : '0px 9px 16px rgb(159 162 191 / 18%), 0px 2px 2px rgb(159 162 191 / 32%)')};
  border-radius: 6px;
  margin-bottom: 4px;
  overflow: hidden;
`;

export default GridTableRow;
