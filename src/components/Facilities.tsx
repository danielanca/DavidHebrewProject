import styles from "./Facilities.module.scss";
import TopMessage from "./mini/TopMessage";
import images from "../data/images";
import strings from "./../utils/strings.json";
const Facilities = () => {
  return (
    <div id="facilities" className={styles.facilitiesContainer}>
      <div className={styles.background} />

      <TopMessage color="white" topTitle="Facilitățiile" bottomTitle="oferite de noi" />
      <div className={"row " + styles.listFacil}>
        <p className={styles.boldText}>
          {
            "Suntem situati la 5 minute de mers pe jos pana la noua intrare din Salina Turda (pe strada principala spre Salina Turda)"
          }
        </p>
      </div>
      <div className={"row " + styles.listFacil}>
        {Object.values(strings.facilities).map((item) => (
          <div className={"col-4 col-sm-12 " + styles.facilItem}>
            <img className={styles.imageThumb} src={item.image} />
            <h3 className={styles.facilText}>{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
