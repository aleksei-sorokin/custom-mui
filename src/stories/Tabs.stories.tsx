import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItem, Tabs, Tab, Box } from '@mui/material';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const Template: ComponentStory<typeof MenuItem> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
  };
  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          marginBottom: '20px',
        }}>
        <Tab icon={<ErrorOutlineIcon fontSize='small'/>} iconPosition='start' label='Tab 1' {...a11yProps(1)} />
        <Tab icon={<ChatBubbleOutlineIcon  fontSize='small'/>} iconPosition='start' label='Tab 2' {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        Content 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content 2
      </TabPanel>
    </React.Fragment>
  );
};

export const Primary = Template.bind({});
