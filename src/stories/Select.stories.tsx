import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Button type',
      defaultValue: 'outlined',
      options: ['filled', 'outlined', 'standard'],
      control: {
        type: 'select',
      },
    },
    size: {
      type: 'string',
      description: 'Button size',
      options: ['medium', 'small'],
      defaultValue: 'small',
      control: {
        type: 'radio',
      },
    },
    fullWidth: {
      type: 'boolean',
      description: 'Fullwidth button',
      defaultValue: false,
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <React.Fragment>
    <FormControl {...args}>
      <InputLabel id='demo-simple-select-label'>Select</InputLabel>
      <Select labelId='demo-simple-select-label' {...args} value={2}>
        <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
        <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
        <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
      </Select>
    </FormControl>
    <br />
    <br />
    <FormControl {...args} disabled>
      <InputLabel id='demo-simple-select-label-disabled'>Select</InputLabel>
      <Select labelId='demo-simple-select-label-disabled' {...args} value={1} disabled>
        <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
        <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
        <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
      </Select>
    </FormControl>
    <br />
    <br />
    <FormControl {...args} error>
      <InputLabel id='demo-simple-select-label-disabled'>Select</InputLabel>
      <Select labelId='demo-simple-select-label-disabled' {...args} value={3}>
        <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
        <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
        <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
      </Select>
      <FormHelperText>Error</FormHelperText>
    </FormControl>
    <br />
    <br />
  </React.Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
};
