import { Grid as GridMui, styled } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '../../theme/colorsLight';
import { typography } from '../../theme/typography';

interface ITdProps {
  children: any;
  //xs?: number | boolean;
  type?: string;
  //alignItems?: string;
  //justifyContent?: string;
  //textAlign?: string;
}

// const GridTableCell: FC<ITdProps> = ({ children, width, type, alignItems, justifyContent, textAlign }) => {
const GridTableCell: FC<ITdProps> = (props) => {
  return (
    // <Grid xs={width} type={type} item alignItems={alignItems} justifyContent={justifyContent} sx={{ textAlign: textAlign || '' }}>
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

const Grid = styled(GridMui)<{ type?: string }>`
  padding: ${(props) => (props.type === 'th' ? '20px 12px 0' : '20px 12px')};
  color: ${(props) => (props.type === 'th' ? colors.action.active : colors.text.primary)};
  ${typography.buttonMedium}

  &:first-of-type {
    padding-left: 20px;
  }

  &:last-of-type {
    padding-right: 20px;
  }
`;

export default GridTableCell;
