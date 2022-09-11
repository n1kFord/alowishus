import React from 'react';
import styles from './Contact.module.scss';
import logoPath from '../../images/logo.png';
import arrowPath from '../../images/arrow-right.svg';
import SocialLogo from '../SocialLogo/SocialLogo';

const Contact = () => {
  return (
    <div className={styles.Contact} data-testid='Contact' data-aos='fade-up'>
      <div className={styles.info} data-aos='fade-right'>
        <img src={logoPath} alt='logo' className={styles.logo} />
        <p className={styles.subtitle}>
          We made it our mission to create community everyday and grow
          meaningful, lasting relationships with our staff, our suppliers and of
          course you, our customers.
        </p>

        <h3>Store Locations</h3>
        <p className={`${styles.subtitle} ${styles.second}`}>
          Find your nearest Alowishus store with opening hours, location and
          contact details.
        </p>

        <button type='button'>
          Find my Alowishus{' '}
          <img src={arrowPath} alt='arrow right' className={styles.arrow} />
        </button>
      </div>

      <div className={styles.social} data-aos='fade-left'>
        <h3>Contact Alowishus!</h3>
        <div className={styles.option}>
          <SocialLogo type='email' />
          <p>alowishus@gmai.com</p>
        </div>
        <div className={styles.option}>
          <SocialLogo type='phone' />
          <p>+110 214 214 2451</p>
        </div>
        <div className={styles.option}>
          <SocialLogo isLink={true} type='facebook' />
          <SocialLogo isLink={true} type='instagram' />
          <SocialLogo isLink={true} type='twitter' />
          <SocialLogo isLink={true} type='linkedin' />
        </div>

        <h3>First One’s On Us!</h3>
        <input type='text' placeholder='E-mail' />
        <button type='button'>Subscribe</button>
      </div>
    </div>
  );
};

export default Contact;
