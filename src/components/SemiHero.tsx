import styles from "./SemiHero.module.scss";
import images from "../data/images";
import strings from "../data/strings.json";

const HeroHeader = () => {
  return (
    <div id="home" className={styles.head}>
      <div className={styles.imageBackground}></div>
      <div className={styles.headerTitle}>
          <img className={styles.starLogo} src={images.logo}></img>
        <h3 className={styles.h3Title}>{"David Hebrew"}</h3>
        <h3 className={styles.prices}>{"Hai sa vorbim!"} </h3>
       
      </div>
     
    </div>
  );
};

export default HeroHeader;