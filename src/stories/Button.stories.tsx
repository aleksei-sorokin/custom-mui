import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Button type',
      options: ['contained', 'outlined', 'text'],
      control: {
        type: 'select',
      },
    },
    color: {
      type: 'string',
      description: 'Button color',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      control: {
        type: 'select',
      },
    },
    size: {
      type: 'string',
      description: 'Button size',
      options: ['large', 'medium', 'small'],
      control: {
        type: 'select',
      },
    },
    children: {
      type: 'string',
      description: 'Button text',
      control: {
        type: 'text',
      },
    },
    disabled: {
      type: 'boolean',
      description: 'Disabled variant',
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    startIcon: {
      type: 'boolean',
      description: 'Button with icon',
      defaultValue: false,
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    endIcon: {
      type: 'boolean',
      description: 'Button with icon',
      defaultValue: false,
      options: [true, false],
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
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
    {args.children}
  </Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  size: 'large',
  color: 'primary',
  children: 'Button',
  disabled: false,
};
