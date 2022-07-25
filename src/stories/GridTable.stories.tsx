import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GridTable from '../components/GridTable/GridTable';
import GridTableCell from '../components/GridTable/GridTableCell';
import GridTableRow from '../components/GridTable/GridTableRow';

export default {
  title: 'Example/GridTable',
  component: GridTable,
  argTypes: {
  },
} as ComponentMeta<typeof GridTable>;

const Template: ComponentStory<typeof GridTable> = (args) => (
  <GridTable {...args}>
    <GridTableRow type='thead'>
      <GridTableCell type='th' xs={2}>Title 1</GridTableCell>
      <GridTableCell type='th' xs={true}>Title 2</GridTableCell>
      <GridTableCell type='th' xs={true}>Title 3</GridTableCell>
    </GridTableRow>
    <GridTableRow>
      <GridTableCell xs={2}>1</GridTableCell>
      <GridTableCell xs={true}>2</GridTableCell>
      <GridTableCell xs={true}>3</GridTableCell>
    </GridTableRow>
    <GridTableRow>
      <GridTableCell xs={2}>1</GridTableCell>
      <GridTableCell xs={true}>2</GridTableCell>
      <GridTableCell xs={true}>3</GridTableCell>
    </GridTableRow>
  </GridTable>
);

export const Primary = Template.bind({});
Primary.args = {};
