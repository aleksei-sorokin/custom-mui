import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField, Grid } from '@mui/material';

export default {
  title: 'Example/Textfield',
  component: TextField,
  argTypes: {
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
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          '.MuiFormControl-root': {
            margin: '10px',
          },
        }}>
        <TextField {...args} size='medium'/>
        <TextField {...args} size='medium' value='Text' disabled />
        <TextField {...args} size='medium' error defaultValue='Default Value' helperText='Incorrect entry' />
        <TextField {...args} size='medium' variant='filled'/>
        <TextField {...args} size='medium' variant='outlined'/>
        <TextField {...args} size='medium' variant='standard'/>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          '.MuiFormControl-root': {
            margin: '10px',
          },
        }}>
        <TextField {...args} size='small'/>
        <TextField {...args} size='small' value='Text' disabled />
        <TextField {...args} size='small' error defaultValue='Default Value' helperText='Incorrect entry' />
        <TextField {...args} size='small' variant='filled'/>
        <TextField {...args} size='small' variant='outlined'/>
        <TextField {...args} size='small' variant='standard'/>
      </Grid>
    </Grid>
  </React.Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text field',
};
