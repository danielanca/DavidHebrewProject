import styles from "./HeroHeader.module.scss";
import images from "../data/images";
import strings from "../data/strings.json";

const HeroHeader = () => {
  return (
    <div id="home" className={styles.head}>
      <div className={styles.imageBackground}></div>
      <div className={styles.headerTitle}>
        <h3 className={styles.h3Title}>{"Cazare Salina Turda"}</h3>
        <h3 className={styles.prices}>{"Tarife de la"} </h3>
        <h3 className={styles.prices}>{"50 LEI / camera"} </h3>
      </div>
      <div className={styles.reserveButton}>
        <a href={"tel:" + strings.footer.address.phone}>
          <button className={styles.bookNow}>{"Rezervă telefonic"}</button>
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
