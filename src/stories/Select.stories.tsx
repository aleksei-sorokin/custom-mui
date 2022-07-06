import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, MenuItem, InputLabel, FormControl, FormHelperText, Grid } from '@mui/material';
export default {
  title: 'Example/Select',
  component: FormControl,
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
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => {
  const [val, setVal] = React.useState();

  const handleChange = (event: any) => {
    setVal(event.target.value);
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          '.MuiFormControl-root': {
            margin: '10px',
          },
        }}>
        <FormControl {...args} size='medium' sx={{minWidth: '300px'}}>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl {...args} size='medium' disabled>
          <InputLabel id='demo-simple-select-label-disabled'>Select</InputLabel>
          <Select labelId='demo-simple-select-label-disabled'  label='Select' value={val} onChange={handleChange} disabled>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl {...args} size='medium' error>
          <InputLabel id='demo-simple-select-label-disabled'>Select</InputLabel>
          <Select labelId='demo-simple-select-label-disabled'  label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>

        <FormControl {...args} variant='filled' size='medium'>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl {...args} variant='outlined' size='medium'>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl {...args} variant='standard' size='medium'>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          '.MuiFormControl-root': {
            margin: '10px',
          },
        }}>
        <FormControl {...args} size='small'  sx={{minWidth: '300px'}}>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label'  label='Select'  value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl {...args} size='small' disabled>
          <InputLabel id='demo-simple-select-label-disabled'>Select</InputLabel>
          <Select labelId='demo-simple-select-label-disabled'  label='Select'  value={val} onChange={handleChange} disabled>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl {...args} size='small' error>
          <InputLabel id='demo-simple-select-label-disabled'>Select</InputLabel>
          <Select labelId='demo-simple-select-label-disabled'  label='Select'  value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>


        <FormControl {...args} variant='filled' size='small'>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl {...args} variant='outlined' size='small'>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl {...args} variant='standard' size='small'>
          <InputLabel id='demo-simple-select-label'>Select</InputLabel>
          <Select labelId='demo-simple-select-label' label='Select' value={val} onChange={handleChange}>
            <MenuItem value={1}>Lorem Lorem Lorem</MenuItem>
            <MenuItem value={2}>Lorem Lorem Lorem 2</MenuItem>
            <MenuItem value={3}>Lorem Lorem Lorem 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export const Primary = Template.bind({});
