import React from 'react';

import StockRow from '../containers/Portfolio/StockRow';

export default {
    title: 'Portfolio/StockRow',
    component: StockRow,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <StockRow {...args} />;

export const Meta = Template.bind({});
Meta.args = {
    name: 'Meta, Inc.',
    ticker: 'MTVS',
    price: 347.56,
};

export const Dropbox = Template.bind({});
Dropbox.args = {
    name: 'Dropbox, Inc.',
    ticker: 'DBX',
    price: 26.97,
};
