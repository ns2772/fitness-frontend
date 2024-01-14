// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // You need to define your reducers

const store = createStore(rootReducer);

export default store;

// In _app.js
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
