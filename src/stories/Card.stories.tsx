import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Card type',
      options: ['outlined', 'elevation'],
      control: {
        type: 'select',
      },
      children: {
        type: 'string',
        description: 'Card text',
        control: {
          type: 'text',
        },
      },
    },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Typography>{args.children}</Typography>
  </Card>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'elevation',
  children: 'Card',
};
