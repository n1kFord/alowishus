import React from 'react';
import styles from './Order.module.scss';
import coffeePath from '../../images/coffee-3.png';

const Order = () => {
  return (
    <section className={styles.Order} data-testid='Order' data-aos='fade-up'>
      <img src={coffeePath} alt='order coffee' />
      <div data-aos='fade-left'>
        <h2>Order Your Favourite Coffee</h2>
        <p className={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button type='button' data-aos='fade-up'>
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Order;
