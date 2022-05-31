import { useState } from 'react';
import styles from './LanguageMenu.module.scss';
import images from '../data/images';
import { useTranslation } from 'react-i18next';

interface LanguageProps {
  languageSelected?: (lang: string) => void;
}
const LanguageMenu = ({ languageSelected }: LanguageProps) => {
  var theLanguage: string | null = localStorage.getItem('language');
  if (!theLanguage) {
    theLanguage = 'RO';
  } else {
    theLanguage = localStorage.getItem('language');
  }
  console.log('Loaded:', theLanguage);
  const [languageChoosed, setChoosedLanguage] = useState<string | null>(theLanguage);

  const { i18n } = useTranslation();

  const languageClick = (data: string) => {
    setChoosedLanguage(data);
    console.log('You choosed:', data);
    localStorage.setItem('language', data);
    i18n.changeLanguage(data);
  };
  return (
    <>
      {/* <div className={styles.languageCardboard}> */}
      <div className={styles.wrapSelect}>
        {languageChoosed === 'RO' ? (
          <img onClick={languageClick.bind(1, 'EN')} className={styles.iconLang} src={images.languageIcons.en} />
        ) : (
          <img onClick={languageClick.bind(1, 'RO')} className={styles.iconLang} src={images.languageIcons.ro} />
        )}
      </div>
    </>
  );
};

export default LanguageMenu;
