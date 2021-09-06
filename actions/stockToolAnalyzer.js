export const SET_LOW_REVENUE_GROWTH = 'SET_LOW_REVENUE_GROWTH';
export const SET_MID_REVENUE_GROWTH = 'SET_MID_REVENUE_GROWTH';
export const SET_HIGH_REVENUE_GROWTH = 'SET_HIGH_REVENUE_GROWTH';

export const SET_LOW_SHARE_CHANGE = 'SET_LOW_SHARE_CHANGE';
export const SET_MID_SHARE_CHANGE = 'SET_MID_SHARE_CHANGE';
export const SET_HIGH_SHARE_CHANGE = 'SET_HIGH_SHARE_CHANGE';

export const SET_LOW_PROFIT_MARGIN = 'SET_LOW_PROFIT_MARGIN';
export const SET_MID_PROFIT_MARGIN = 'SET_MID_PROFIT_MARGIN';
export const SET_HIGH_PROFIT_MARGIN = 'SET_HIGH_PROFIT_MARGIN';

export const SET_LOW_FCF_AS_REVENUE = 'SET_LOW_FCF_AS_REVENUE';
export const SET_MID_FCF_AS_REVENUE = 'SET_MID_FCF_AS_REVENUE';
export const SET_HIGH_FCF_AS_REVENUE = 'SET_HIGH_FCF_AS_REVENUE';

export const SET_LOW_PE = 'SET_LOW_PE';
export const SET_MID_PE = 'SET_MID_PE';
export const SET_HIGH_PE = 'SET_HIGH_PE';

export const SET_LOW_PRICE_TO_FCF = 'SET_LOW_PRICE_TO_FCF';
export const SET_MID_PRICE_TO_FCF = 'SET_MID_PRICE_TO_FCF';
export const SET_HIGH_PRICE_TO_FCF = 'SET_HIGH_PRICE_TO_FCF';

export const SET_LOW_DESIRED_ANNUAL_RETURN = 'SET_LOW_DESIRED_ANNUAL_RETURN';
export const SET_MID_DESIRED_ANNUAL_RETURN = 'SET_MID_DESIRED_ANNUAL_RETURN';
export const SET_HIGH_DESIRED_ANNUAL_RETURN = 'SET_HIGH_DESIRED_ANNUAL_RETURN';

export const setLowRevenueGrowth = (value) => ({ type: SET_LOW_REVENUE_GROWTH, value });
export const setMidRevenueGrowth = (value) => ({ type: SET_MID_REVENUE_GROWTH, value });
export const setHighRevenueGrowth = (value) => ({ type: SET_HIGH_REVENUE_GROWTH, value });

export const setLowShareChange = (value) => ({ type: SET_LOW_SHARE_CHANGE, value });
export const setMidShareChange = (value) => ({ type: SET_MID_SHARE_CHANGE, value });
export const setHighShareChange = (value) => ({ type: SET_HIGH_SHARE_CHANGE, value });

export const setLowProfitMargin = (value) => ({ type: SET_LOW_PROFIT_MARGIN, value });
export const setMidProfitMargin = (value) => ({ type: SET_MID_PROFIT_MARGIN, value });
export const setHighProfitMargin = (value) => ({ type: SET_HIGH_PROFIT_MARGIN, value });

export const setLowFCFAsRevenue = (value) => ({ type: SET_LOW_FCF_AS_REVENUE, value });
export const setMidFCFAsRevenue = (value) => ({ type: SET_MID_FCF_AS_REVENUE, value });
export const setHighFCFAsRevenue = (value) => ({ type: SET_HIGH_FCF_AS_REVENUE, value });

export const setLowPE = (value) => ({ type: SET_LOW_PE, value });
export const setMidPE = (value) => ({ type: SET_MID_PE, value });
export const setHighPE = (value) => ({ type: SET_HIGH_PE, value });

export const setLowPriceToFCF = (value) => ({ type: SET_LOW_PRICE_TO_FCF, value });
export const setMidPriceToFCF = (value) => ({ type: SET_MID_PRICE_TO_FCF, value });
export const setHighPriceToFCF = (value) => ({ type: SET_HIGH_PRICE_TO_FCF, value });

// eslint-disable-next-line max-len
export const setLowDesiredAnnualReturn = (value) => ({ type: SET_LOW_DESIRED_ANNUAL_RETURN, value });
// eslint-disable-next-line max-len
export const setMidDesiredAnnualReturn = (value) => ({ type: SET_MID_DESIRED_ANNUAL_RETURN, value });
// eslint-disable-next-line max-len
export const setHighDesiredAnnualReturn = (value) => ({ type: SET_HIGH_DESIRED_ANNUAL_RETURN, value });
