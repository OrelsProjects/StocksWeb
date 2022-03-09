import { combineReducers } from 'redux';
import stocks from './stocks';
import auth from './auth';
import stockToolAnalyzer from './stockToolAnalyzer';
import portfolio from './portfolio.js';
import dcf from './dcf';

const allReducers = combineReducers({
  stocks,
  auth,
  stockToolAnalyzer,
  portfolio,
  dcf,
});

export default allReducers;
