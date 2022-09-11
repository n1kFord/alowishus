import React from 'react';
import styles from './Selling.module.scss';
import Menu from '../Menu/Menu';

const Selling = () => {
  return (
    <section
      className={styles.Selling}
      data-testid='Selling'
      data-aos='fade-right'
    >
      <h2>Best Selling Coffee</h2>
      <p className={styles.subtitle}>
        A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
        delicious coffee’s.
      </p>
      <Menu type='coffee' />
    </section>
  );
};

export default Selling;
