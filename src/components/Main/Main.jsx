import React from 'react';
import styles from './Main.module.scss';
import Explore from '../Explore/Explore';
import Order from '../Order/Order';
import Selling from '../Selling/Selling';
import MobileApp from '../MobileApp/MobileApp';
import Feedback from '../Feedback/Feedback';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <div className={styles.Main} data-testid='Main' data-aos='fade-up'>
      <div className={styles.wrapper}>
        <Explore />
        <Order />
        <Selling />
        <MobileApp />
        <Feedback />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
