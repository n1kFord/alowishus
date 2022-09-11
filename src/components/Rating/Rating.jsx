import React from 'react';
import styles from './Rating.module.scss';
import Star from '../Star/Star';

const Rating = ({ amount = 1, type }) => {
  const stars = Array(amount)
    .fill(1)
    .map((item, index) => <Star type={type} key={`_${index}`} />);

  return (
    <div className={styles.Rating} data-testid='Rating'>
      <span>{stars}</span>
    </div>
  );
};

export default Rating;
