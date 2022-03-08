import React from 'react';

import NewPurchase from '../containers/Portfolio/NewPurchase';

export default {
    title: 'Portfolio/NewPurchase',
    component: NewPurchase,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <NewPurchase {...args} />;

export const Default = Template.bind({});
Default.args = {
    onPurchaseDone: () => { alert('story purchase'); }
};
