import React from 'react';
import Text from '../components/Customs/Text';

export default {
  title: 'General/Text',
  component: Text,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'default',
};
