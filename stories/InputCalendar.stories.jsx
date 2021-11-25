import React from 'react';
import InputCalendar from '../components/Customs/InputCalendar';

export default {
  title: 'General/InputCalendar',
  component: InputCalendar,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <InputCalendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: '',
  placeHolder: 'Default Placeholder',
  label: 'Default Label',
};
