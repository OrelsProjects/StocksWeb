import React from 'react';
import StockToolAnalyzerRow from '../components/StockToolAnalyzer/StockToolAnalyzerRow';

export default {
  title: 'StockToolAnalyzer/StockToolAnalyzerRow',
  component: StockToolAnalyzerRow,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <StockToolAnalyzerRow {...args} />;

export const Default = Template.bind({});
Default.args = {

  columns: {
    mainTitle: 'Rev. Growth %',
    subTitles: [{
      text: '50',
      isInput: false,
      isPercentage: true,
    },
    {
      text: '10',
      isInput: false,
      isPercentage: true,
    },
    {
      text: '5',
      isInput: false,
      isPercentage: true,
    },
    {
      text: '30',
      isInput: true,
      isPercentage: true,
      onChange: (event) => { console.log(event.target.value); },
    },
    {
      text: '40',
      isInput: true,
      isPercentage: true,
      onChange: (event) => { console.log(event.target.value); },
    },
    {
      text: '50',
      isInput: true,
      isPercentage: true,
      onChange: (event) => { console.log(event.target.value); },
    },
    ],
  },
  groupWidth: '50%',
  columnsInGroupCount: 3,
};
