import { combineReducers } from 'redux'
import stocks from '../reducers/stocks'

const allReducers = combineReducers({
    stocks
})

export default allReducers