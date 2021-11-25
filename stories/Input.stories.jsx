import React from 'react';
import Input from '../components/Customs/Input';

export default {
  title: 'General/Input',
  component: Input,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: '',
  placeHolder: 'Default Placeholder',
  label: 'Default Label',
};
