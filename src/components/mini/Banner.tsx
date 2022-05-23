import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.longBanner}>
      <span className={styles.texter}>{"Ne aflam la 3 minute de Salina Turda"}</span>
    </div>
  );
};

export default Banner;
