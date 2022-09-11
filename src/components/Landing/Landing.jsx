import React from 'react';
import styles from './Landing.module.scss';
import awardImagePath from '../../images/countrywide-award.png';
import coffeeImagePath from '../../images/coffee-1.png';
import Rating from '../Rating/Rating';

function Landing() {
  return (
    <div className={styles.Landing} data-testid='Landing' data-aos='fade-left'>
      <div className={styles.main}>
        <h1>
          Alowishus Delicious Coffee
          <img
            src={awardImagePath}
            alt='award image'
            className={styles.award}
          />
        </h1>
        <p>
          A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
          delicious coffee’s.
        </p>
        <button type='button' className={styles.download}>
          Download App
        </button>
        <a className={styles.shop} href='/'>
          Shop Coffee
        </a>
      </div>
      <div className={styles.stars} data-aos='fade-left'>
        <h2>
          <Rating amount={5} />
        </h2>
        <p className={styles.rank}>
          4.9 out of 5 Overall Star Rating for All Local Business.
        </p>
      </div>
      <img
        src={coffeeImagePath}
        alt='coffee'
        className={styles.coffee}
        data-aos='fade-up'
      />
    </div>
  );
}

export default Landing;
