import { combineReducers } from 'redux'
import stocks from '../reducers/stocks'
import auth from '../reducers/auth'

const allReducers = combineReducers({
    stocks,
    auth
})

export default allReducers