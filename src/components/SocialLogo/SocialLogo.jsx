import React from 'react';
import styles from './SocialLogo.module.scss';
import emailLogo from '../../images/email-logo.svg';
import phoneLogo from '../../images/phone-logo.svg';
import facebookLogo from '../../images/facebook-logo.svg';
import instagramLogo from '../../images/instagram-logo.svg';
import twitterLogo from '../../images/twitter-logo.svg';
import linkedinLogo from '../../images/linkedin-logo.svg';

const SocialLogo = ({ type, isLink = false }) => {
  const getImage = (option) => {
    switch (option) {
      case 'email':
        return emailLogo;
      case 'phone':
        return phoneLogo;
      case 'facebook':
        return facebookLogo;
      case 'instagram':
        return instagramLogo;
      case 'twitter':
        return twitterLogo;
      case 'linkedin':
        return linkedinLogo;
      default:
        return emailLogo;
    }
  };

  const logoPath = getImage(type);

  return !isLink ? (
    <div className={styles.SocialLogo} data-testid='SocialLogo'>
      <img src={logoPath} alt='social logo' />
    </div>
  ) : (
    <a href='/' className={styles.SocialLogo} data-testid='SocialLogo'>
      <img src={logoPath} alt='social logo' />
    </a>
  );
};

export default SocialLogo;
