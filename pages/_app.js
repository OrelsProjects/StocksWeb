import '../styles/globals.css'
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import allReducers from '../reducers'

const store = createStore(allReducers, composeWithDevTools())

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
