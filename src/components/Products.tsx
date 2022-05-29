import styles from './Products.module.scss';
import images from '../data/images';
const Products = () => {
  return (
    <div className={styles.productContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3 className={styles.categoryTitle}>{'PRODUSE'}</h3>

            <h3 className={styles.titleTop}>{'Fructe padure'}</h3>
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
        <div className="row">
          <div className="col">
            <h3 className={styles.titleTop}>{'Metale pretioase'}</h3>
            <div className={styles.messageBottom}>
              <p>
                {`Societeatea noastra importa `} <strong>{`metale pretioase `}</strong>
                {`cum ar fi `} <strong>{' aur si diamante. '}</strong>
              </p>
            </div>

            <img className={styles.berriesImage} src={images.products.gold} />
            <p>{'Comercializăm aur de 22 și 24 karate sub formă de lingouri.'}</p>
            <p>{'Cantitate minimă pentru comandă: 1 lingou de 1 KG '}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className={styles.titleTop}>{'PALEȚI'}</h3>
            <div className={styles.messageBottom}>
              <p>
                {`Oferim spre vânzare `} <strong>{`europaleți si paleți speciali `}</strong>
              </p>
            </div>

            <img className={styles.berriesImage} src={images.products.paleta} />
            <p>
              <strong>{'Dimensiuni europalet: '} </strong> {'1200 mm X800mm x145 mm'}
            </p>
            <p>{'Așteptăm solictatea dumneavoastră si pentru paleți speciali care sunt adimensionali.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
