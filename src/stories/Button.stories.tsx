import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Grid } from '@mui/material';
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
    children: {
      type: 'string',
      description: 'Button text',
      control: {
        type: 'text',
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

const Template: ComponentStory<typeof Button> = (args) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sx={{ '.MuiButton-root': { margin: '10px' } }}>
      <Button color='primary' size='large' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='secondary' size='large' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='error' size='large' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='warning' size='large' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='info' size='large' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='success' size='large' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='success' size='large' disabled {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
    </Grid>
    <Grid item xs={12} sx={{ '.MuiButton-root': { margin: '10px' } }}>
      <Button color='primary' size='medium' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='secondary' size='medium' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='error' size='medium' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='warning' size='medium' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='info' size='medium' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='success' size='medium' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='success' size='medium' disabled {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
    </Grid>
    <Grid item xs={12} sx={{ '.MuiButton-root': { margin: '10px' } }}>
      <Button color='primary' size='small' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='secondary' size='small' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='error' size='small' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='warning' size='small' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='info' size='small' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='success' size='small' {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
      <Button color='success' size='small' disabled {...args} startIcon={args.startIcon && <ChevronLeft />} endIcon={args.endIcon && <ChevronRight />} fullWidth={args.fullWidth && true}>
        {args.children}
      </Button>
    </Grid>
  </Grid>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  children: 'Button',
};
