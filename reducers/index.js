import { combineReducers } from 'redux';
import stocks from './stocks';
import auth from './auth';
import stockToolAnalyzer from './stockToolAnalyzer';
import portfolio from './portfolio.js';

const allReducers = combineReducers({
  stocks,
  auth,
  stockToolAnalyzer,
  portfolio,
});

export default allReducers;
