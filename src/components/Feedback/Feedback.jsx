import React from 'react';
import styles from './Feedback.module.scss';
import Rating from '../Rating/Rating';
import coffeePath from '../../images/coffee-6.svg';
import coffeeSecondPath from '../../images/coffee-7.png';
import userFirstPath from '../../images/user-1.svg';
import userSecondPath from '../../images/user-2.svg';

import arrowLeftPath from '../../images/arrow-left.svg';
import arrowRightPath from '../../images/arrow-right.svg';
import Review from '../Review/Review';

const reviewList = [
  {
    name: 'Brooklyn Simmons',
    number: 5,
    message:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet\n' +
      '            sint. Velit officia consequat duis enim velit mollit. Exercitation\n' +
      '            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt\n' +
      '            ullamco est sit aliqua dolor do amet sint. Velit officia',
    imageSrc: userFirstPath,
  },
  {
    name: 'Imam White',
    number: 5,
    message:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet\n' +
      '            sint. Velit officia consequat duis enim velit mollit. Exercitation\n' +
      '            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt\n' +
      '            ullamco est sit aliqua dolor do amet sint. Velit officia',
    imageSrc: userSecondPath,
  },
];

const Feedback = () => {
  return (
    <div className={styles.Feedback} data-testid='Feedback' data-aos='fade-up'>
      <img
        src={coffeePath}
        alt='coffee design'
        className={`${styles.coffee} ${styles.first}`}
        data-aos='fade-right'
      />
      <div className={styles.reviews}>
        {reviewList.map((el, i) => {
          return (
            <Review
              name={el.name}
              number={el.number}
              message={el.message}
              imageSrc={el.imageSrc}
              key={`review_${i}`}
            />
          );
        })}
      </div>

      <div className={styles.container}>
        <h2>What Our Customers Say</h2>
        <div className={styles.rating} data-aos='fade-up'>
          <h3>4.9</h3>
          <div className={styles.info}>
            <Rating type={1} amount={5} />
            <p>based on 2452+ reviews</p>
          </div>
        </div>

        <div className={styles.arrows} data-aos='fade-down'>
          <button type='button' className={styles.arrow}>
            <img src={arrowLeftPath} alt='arrow left' />
          </button>
          <button type='button' className={styles.arrow}>
            <img src={arrowRightPath} alt='arrow right' />
          </button>
        </div>
      </div>

      <img
        src={coffeeSecondPath}
        alt='coffee design'
        className={`${styles.coffee} ${styles.second}`}
        data-aos='fade-up'
      />
    </div>
  );
};

export default Feedback;
