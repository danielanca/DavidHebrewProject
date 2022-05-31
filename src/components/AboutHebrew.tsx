import styles from './../components/AboutHebrew.module.scss';
import strings from './../data/strings.json';
import { useTranslation } from 'react-i18next';
const AboutHebrew = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="aboutus" className={styles.wrapperContainer}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <div className={styles.cardBoard}>
              <h3 className={styles.titleName}>{t('aboutUs.textCategory')}</h3>
              <div className={styles.messageDescription}>
                <p>{t('aboutUs.message1')}</p>
                <p>{t('aboutUs.message2')}</p>
                <p>{t('aboutUs.message3')}</p>
                <p className={styles.thankyouMessage}>
                  <strong>{t('aboutUs.thankyou')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHebrew;
