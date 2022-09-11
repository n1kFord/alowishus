import React from 'react';
import styles from './Review.module.scss';
import Rating from '../Rating/Rating';

const Review = ({ name, number, message, imageSrc }) => {
  return (
    <div className={styles.Review} data-testid='Review' data-aos='fade-right'>
      <img src={imageSrc} alt='user photo' />
      <div className={styles.info}>
        <h4>{name}</h4>
        <Rating type={1} amount={number} />
      </div>
      <p>“{message}”</p>
    </div>
  );
};

export default Review;
