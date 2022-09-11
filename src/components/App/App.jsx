import React from 'react';

import styles from './App.module.scss';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Main from '../Main/Main';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <Landing />
      </div>
      <Main />
    </div>
  );
}

export default App;
