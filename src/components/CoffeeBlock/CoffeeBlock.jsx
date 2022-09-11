import React from 'react';
import styles from './CoffeeBlock.module.scss';

const CoffeeBlock = ({
  name,
  rank,
  description,
  imageSrc,
  imageAlt,
  price,
}) => {
  return (
    <div
      className={styles.CoffeeBlock}
      data-testid='CoffeeBlock'
      data-aos='fade-up'
    >
      <div className={styles.container}>
        <img src={imageSrc} alt={imageAlt} />
        <div className={styles.info}>
          <p>{`#${rank} Selling`}</p>
          <h3>{name}</h3>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.payment}>
        <p>${price}</p>
        <button type='button'>Order Now</button>
      </div>
    </div>
  );
};

export default CoffeeBlock;
