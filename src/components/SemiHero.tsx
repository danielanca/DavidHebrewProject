import { useTranslation } from 'react-i18next';
import styles from './SemiHero.module.scss';
import images from '../data/images';

const HeroHeader = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="home" className={styles.head}>
      <div className={styles.imageBackground}></div>
      <div className={styles.headerTitle}>
        <img className={styles.starLogo} src={images.logo}></img>
        <h3 className={styles.h3Title}>{t('heroMessage.firstHero')}</h3>
        <h3 className={styles.prices}>{t('heroMessage.textWelcome')} </h3>
      </div>
    </div>
  );
};

export default HeroHeader;
