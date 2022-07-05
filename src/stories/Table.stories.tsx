import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table, TableRow, TableCell, TableHead, TableBody } from '@mui/material';

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {
    stickyHeader: {
      type: 'boolean',
      description: 'Sticky header',
      options: [true, false],
      defaultValue: false,
      control: {
        type: 'radio'
      }
    }
  },
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
