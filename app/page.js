import Image from 'next/image'
import styles from './page.module.css'
import WorkoutList from '../components/WorkoutList';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../public/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
