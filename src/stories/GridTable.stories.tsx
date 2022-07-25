import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GridTable from '../components/GridTable/GridTable';
import GridTableCell from '../components/GridTable/GridTableCell';
import GridTableRow from '../components/GridTable/GridTableRow';

export default {
  title: 'Example/GridTable',
  component: GridTable,
  argTypes: {
    stickyHeader: {
      type: 'boolean',
      description: 'Sticky header',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof GridTable>;

const Template: ComponentStory<typeof GridTable> = (args) => (
  <GridTable {...args}>
    <GridTableRow type='thead'>
      <GridTableCell type='th' width={2}>Title 1</GridTableCell>
      <GridTableCell type='th' width={true}>Title 2</GridTableCell>
      <GridTableCell type='th' width={true}>Title 3</GridTableCell>
    </GridTableRow>
    <GridTableRow>
      <GridTableCell width={2}>1</GridTableCell>
      <GridTableCell width={true}>2</GridTableCell>
      <GridTableCell width={true}>3</GridTableCell>
    </GridTableRow>
  </GridTable>
);

export const Primary = Template.bind({});
Primary.args = {};
