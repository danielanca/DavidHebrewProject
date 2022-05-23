import styles from "./Turistice.module.scss";
import images from "../data/images";
import strings from "./../data/strings.json";
import TopMessage from "./mini/TopMessage";
const Turistice = () => {
  return (
    <div id="tourist" className={styles.head}>
      <div className={styles.imageBackground} />
      <TopMessage color={"white"} topTitle="Peisaje" bottomTitle="De admirat in apropiere" />
      <div className={styles.list}>
        {Object.values(strings.turism).map((item) => (
          <div className={styles.touristContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.imageThumb} src={item.image} />
            </div>
            <div className={styles.textArea}>
              <div className={styles.infoContainer}>
                <div>
                  <h3 className={styles.travelTitle}>{item.title}</h3>
                  <h3 className={styles.travelDistance}>{item.distance}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
              <a target="_blank" href={item.link}>
                <span className={styles.locationMap}>{"Locatia in Google Maps"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turistice;
