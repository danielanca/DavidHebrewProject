import { useState } from 'react';
import styles from './LanguageMenu.module.scss';
import images from '../data/images';
interface LanguageProps {
  languageSelected?: (lang: string) => void;
}
const LanguageMenu = ({ languageSelected }: LanguageProps) => {
  const [languageChoosed, setChoosedLanguage] = useState<string>('');

  const languageClick = (data: string) => {
    setChoosedLanguage(data);
    console.log('You choosed:', data);
  };
  return (
    <div className={styles.languageCardboard}>
      <div className={styles.wrapSelect}>
        <img onClick={languageClick.bind(1, 'RO')} className={styles.iconLang} src={images.languageIcons.ro} />
        <img onClick={languageClick.bind(1, 'EN')} className={styles.iconLang} src={images.languageIcons.en} />
      </div>
      <p className={styles.chooseLanguage}>{'Limba/Language'}</p>
    </div>
  );
};

export default LanguageMenu;
