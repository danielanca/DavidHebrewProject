import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
// import ReactGA from 'react-ga4'
import LanguageMenu from './LanguageMenu';
import images from './../data/images';

import styles from './NavBarResidence.module.scss';

import MenuMobile from './MenuMobile';

import strings from '../data/strings.json';
import { useTranslation } from 'react-i18next';

const NavBarResidence = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={styles.navbarContainer}>
        <MenuMobile />
        <ul className={styles.ulMenuEnd}>
          <li className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.desprenoi.link}>
              {t('navMenu.desprenoi.text')}
            </NavHashLink>
          </li>
          <li className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.produse.link}>
              {t('navMenu.produse.text')}
            </NavHashLink>
          </li>
        </ul>
        <div className={styles.middleNoUl}>
          <NavHashLink to={strings.navMenu.contact.link}>
            <img className={styles.navLogo} alt={'Logo'} src={images.logo} />
          </NavHashLink>
        </div>
        <ul className={styles.ulMenuStart}>
          <li className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.altele.link}>
              {t('navMenu.altele.text')}
            </NavHashLink>
          </li>
          <li className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.contact.link}>
              {t('navMenu.contact.text')}
            </NavHashLink>
          </li>
        </ul>
        <LanguageMenu />
      </div>
    </>
  );
};

export default NavBarResidence;
