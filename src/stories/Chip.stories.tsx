import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip, Grid } from '@mui/material';

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
        type: 'radio',
      },
    },
		clickable: {
			type: 'boolean',
			options: [true, false],
			defaultValue: false,
			control: {
				type: 'radio'
			}
		}
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Grid container spacing={2}>
    <Grid
      xs={12}
      item
      sx={{
        '.MuiChip-root': {
          margin: '10px',
        },
      }}>
      <Chip {...args} size='medium' />
      <Chip {...args} size='medium' onDelete={() => {}} />
      <Chip {...args} size='medium' color='primary' />
      <Chip {...args} size='medium' color='secondary' />
      <Chip {...args} size='medium' color='error' />
      <Chip {...args} size='medium' color='warning' />
      <Chip {...args} size='medium' color='info' />
      <Chip {...args} size='medium' color='success' />
    </Grid>
    <Grid
      xs={12}
      item
      sx={{
        '.MuiChip-root': {
          margin: '10px',
        },
      }}>
      <Chip {...args} size='small' />
      <Chip {...args} size='small' onDelete={() => {}} />
      <Chip {...args} size='small' color='primary' />
      <Chip {...args} size='small' color='secondary' />
      <Chip {...args} size='small' color='error' />
      <Chip {...args} size='small' color='warning' />
      <Chip {...args} size='small' color='info' />
      <Chip {...args} size='small' color='success' />
    </Grid>
  </Grid>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Chip',
};
