import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItem, Typography } from '@mui/material';


export default {
  title: 'Example/Menu Item',
  component: MenuItem,
  argTypes: {},
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <React.Fragment>
    <MenuItem {...args}>
      <Typography>Menu Item</Typography>
    </MenuItem>
    <MenuItem className='Mui-selected' {...args}>
      <Typography>Menu Item</Typography>
    </MenuItem>
  </React.Fragment>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
