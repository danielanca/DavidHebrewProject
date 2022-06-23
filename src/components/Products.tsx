import styles from './Products.module.scss';
import images from '../data/images';
import strings from './../data/strings.json';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
const Products = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="produse" className={styles.productContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className={styles.categoryTitle}>{t('productsArea.textCategory')}</h1>

            <h2 className={styles.titleTop}>{t('productsArea.productItem1')}</h2>
            <div className={styles.messageBottom}>
              <p>{parse(t('productsArea.productItem1Desc'))}</p>
            </div>

            <img className={styles.berriesImage} src={images.products.berries} />

            <div className={styles.productList}>
              <div className={styles.item}>
                <img className={styles.itemPic} src={images.products.afine} />
                <h3 className={styles.titleProduct}>{t('productsArea.productNames.item1')}</h3>
              </div>
              <div className={styles.item}>
                <img className={styles.itemPic} src={images.products.zmeura} />
                <h3 className={styles.titleProduct}>{t('productsArea.productNames.item2')}</h3>
              </div>
              <div className={styles.item}>
                <img className={styles.itemPic} src={images.products.mure} />
                <h3 className={styles.titleProduct}>{t('productsArea.productNames.item3')}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className={styles.titleTop}>{t('productsArea.productItem2')}</h3>
            <div className={styles.messageBottom}>
              <p>{parse(t('productsArea.productItem2Desc'))}</p>
            </div>

            <img className={styles.berriesImage} src={images.products.gold} />
            <p>{t('productsArea.otherDetails')}</p>
            <p>{t('productsArea.otherDetails2')}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className={styles.titleTop}>{t('productsArea.productItem3')}</h3>
            <div className={styles.messageBottom}>
              <p>{parse(t('productsArea.descriptionItem3'))}</p>
            </div>

            <img className={styles.berriesImage} src={images.products.paleta} />
            <p>{parse(t('productsArea.dimension'))}</p>
            <p>{t('productsArea.waitingFor')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
