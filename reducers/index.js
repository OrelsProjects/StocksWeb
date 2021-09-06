import { combineReducers } from 'redux';
import stocks from './stocks';
import auth from './auth';
import stockToolAnalyzer from './stockToolAnalyzer';

const allReducers = combineReducers({
  stocks,
  auth,
  stockToolAnalyzer,
});

export default allReducers;
