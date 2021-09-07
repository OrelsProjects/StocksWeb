import React from 'react';

import StockToolAnalyzerHeader from '../components/StockToolAnalyzer/StockToolAnalyzerHeader';

export default {
  title: 'StockToolAnalyzer/StockToolAnalyzerHeader',
  component: StockToolAnalyzerHeader,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <StockToolAnalyzerHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: {
    mainTitle: 'Main Title',
    subTitles: ['sub title1', 'sub title2', 'sub title3'],
  },
};
