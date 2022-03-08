import React from 'react';
import InputBox from '../components/Customs/Input/InputBox';

export default {
  title: 'StockToolAnalyzer/InputBox',
  component: InputBox,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label',
};
