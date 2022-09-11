import React from 'react';
import styles from './Header.module.scss';
import logoPath from '../../images/header-logo.png';
import miniLogoPath from '../../images/mini-logo.png';

function Header() {
  return (
    <div className={styles.Header} data-testid='Header' data-aos='fade-down'>
      <a href='/' data-aos='fade-down'>
        <img src={logoPath} alt='main logo' className={styles.logo} />
      </a>

      <div className={styles.navigation}>
        <a href='/'>Cafe Munu</a>
        <a href='/'>About Us</a>
        <a href='/'>Find Us</a>
        <a href='/'>Alowishus Catering</a>
        <a href='/'>
          <img src={miniLogoPath} alt='logo' className={styles.mini} />
        </a>
      </div>

      <button type='button'>Buy gift vouchers</button>
    </div>
  );
}

export default Header;
