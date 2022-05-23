import styles from "./MapLocation.module.scss";
import TopMessage from "./mini/TopMessage";
const MapLocation = () => {
  return (
    <div id="location" className={styles.locationContainer}>
      <TopMessage color={"black"} topTitle="Locatia Noastră" bottomTitle="unde ne găsiți" />
      <div>
        <h4>{"Strada Frăgăriște nr.28, Turda"}</h4>
      </div>
      <div className={styles.mapContainer}>
        <div className={styles.shadower}>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDHRNODMnEXHkVeQEMkWW2vE5NUANKLDLo
                &q=Casa+Caly+Turda"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
