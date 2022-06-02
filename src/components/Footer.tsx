import { useTranslation } from 'react-i18next';
import images from './../data/images';
import strings from '../data/strings.json';

import styles from './Footer.module.scss';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <img className={styles.logoStyle} src={images.logo} />

        <div className={styles.longLine}>
          <p className={styles.pFooter}>{t('footer.address.locationAddress')}</p>
          <a href={`tel:${t('footer.address.phone')}`}>
            <p className={styles.pFooter}>{t('footer.address.phone')}</p>
          </a>
          <a href={`mailto:${t('footer.address.email')}`}>
            <p className={styles.pFooter}>{t('footer.address.email')}</p>
          </a>
        </div>
        <div className={styles.copyrightItem}>
          <p className={styles.footerText}>{strings.footer.copyrightStuff.copyText}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
