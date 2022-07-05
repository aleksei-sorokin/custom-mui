import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '@mui/material';

export default {
  title: 'Example/Textfield',
  component: TextField,
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
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <React.Fragment>
    <TextField {...args} />
		<br/>
		<br/>
    <TextField {...args} value='Text' disabled />
		<br/>
		<br/>
		<TextField {...args} error defaultValue='Default Value' helperText='Incorrect entry' /> 
  </React.Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text field',
};
