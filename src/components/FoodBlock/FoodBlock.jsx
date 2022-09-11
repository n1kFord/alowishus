import React from 'react';
import styles from './FoodBlock.module.scss';

const FoodBlock = ({ title, description, imageSrc, buttonText, imageAlt }) => {
  return (
    <div
      className={styles.FoodBlock}
      data-testid='FoodBlock'
      data-aos='fade-up'
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageSrc} alt={imageAlt} />
      <button type='button'>{buttonText}</button>
    </div>
  );
};

export default FoodBlock;
