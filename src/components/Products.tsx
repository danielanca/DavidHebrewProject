import styles from './Products.module.scss';
import images from '../data/images';
const Products = () => {
  return (
    <div className={styles.productContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3 className={styles.titleTop}>{'PRODUSE'}</h3>
            <div className={styles.messageBottom}>
              <p>
                {`Societeatea noastra se ocupă cu `} <strong>{`exportul de fructe de padure `}</strong>
                {`care sunt `} <strong>{'culese selectiv '}</strong> {` direct din pădurile României.`}
              </p>
            </div>

            <img className={styles.berriesImage} src={images.products.berries} />

            <div className={styles.productList}>
              <div className={styles.item}>
                <img className={styles.itemPic} src={images.products.afine} />
                <h3 className={styles.titleProduct}>{`Afine`}</h3>
              </div>
              <div className={styles.item}>
                <img className={styles.itemPic} src={images.products.zmeura} />
                <h3 className={styles.titleProduct}>{`Zmeură`}</h3>
              </div>
              <div className={styles.item}>
                <img className={styles.itemPic} src={images.products.mure} />
                <h3 className={styles.titleProduct}>{`Mure`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
