import React from 'react';
import styles from './Explore.module.scss';
import coffeePath from '../../images/coffee-2.svg';
import Menu from '../Menu/Menu';

const Explore = () => {
  return (
    <section
      className={styles.Explore}
      data-testid='Explore'
      data-aos='fade-up'
    >
      <img
        src={coffeePath}
        alt='coffee design'
        className={styles.coffee}
        data-aos='fade-right'
      />
      <div className={styles.welcome}>
        <h2>Explore Our Alowishus</h2>
        <p className={styles.subtitle}>
          A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
          delicious coffee’s.
        </p>
      </div>
      <Menu type='food' />
    </section>
  );
};

export default Explore;
