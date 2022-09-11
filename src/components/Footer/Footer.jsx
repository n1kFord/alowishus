import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.Footer} data-testid='Footer' data-aos='fade-up'>
      <div className={styles.right}>
        <p>Copyright © 2022</p>
        <b>Alowishus Delicious</b>
      </div>
      <div className={styles.links}>
        <a href='/'>Terms of Use</a>
        <span>|</span>
        <a href='/'>Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
