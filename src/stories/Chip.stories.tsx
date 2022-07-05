import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default {
  title: 'Example/Chip',
  component: Chip,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Card type',
      options: ['outlined', 'filled'],
			defaultValue: 'outlined',
      control: {
        type: 'select',
      },
    },
		clickable: {
			type: 'boolean',
			options: [true, false],
			defaultValue: false,
			control: {
				type: 'radio'
			}
		},
    color: {
      type: 'string',
      description: 'Button color',
			defaultValue: 'default',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      control: {
        type: 'select',
      },
    },
		onDelete: {
			type: 'boolean',
			options: [true, false],
			defaultValue: false,
			control: {
				type: 'radio'
			}
		},
		size: {
			type: 'string',
			options: ['medium', 'small'],
			defaultValue: 'small',
			control: {
				type: 'radio'
			}
		}
  },
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Chip',
};
