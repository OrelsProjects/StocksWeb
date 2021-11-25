/* eslint-disable */
import '../styles/globals.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AuthProvider } from '../auth';

import allReducers from '../reducers';

const store = createStore(allReducers, composeWithDevTools());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
