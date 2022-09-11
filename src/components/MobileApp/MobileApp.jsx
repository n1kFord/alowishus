import React from 'react';
import styles from './MobileApp.module.scss';
import coffeePath from '../../images/coffee-5.svg';
import mobileImagePath from '../../images/mobile-app.png';

const MobileApp = () => {
  return (
    <section
      className={styles.MobileApp}
      data-testid='MobileApp'
      data-aos='fade-up'
    >
      <img
        src={coffeePath}
        alt='coffee design'
        className={styles.coffee}
        data-aos='fade-right'
      />
      <div className={styles.container}>
        <h2>Instant Coffee At Your Home</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.{' '}
        </p>
        <button type='button' data-aos='fade-up'>
          Download Our App
        </button>
      </div>
      <img
        src={mobileImagePath}
        alt='mobile app image'
        className={styles.mobile}
        data-aos='fade-left'
      />
    </section>
  );
};

export default MobileApp;
