import styles from "./GallerySection.module.scss";
import TopMessage from "./mini/TopMessage";

import images from "../data/images";
import LightGallery from "lightgallery/react";

const GallerySection = () => {
  const onInit = () => {
    console.log("Gallery init");
  };
  return (
    <div id="gallery" className={styles.main}>
      <TopMessage topTitle="Galerie" bottomTitle="cu căsuța noastră" />
      <div className={styles.pictureWrap}>
        <div className={styles.rowCustom}>
          <div className={styles.columnCustom}>
            {Object.values(images.galleryHouse).map((item) => (
              <img className={styles.galleryPic} src={item} />
            ))}
          </div>
          <div className={styles.columnCustom}>
            {Object.values(images.galleryHouse2).map((item) => (
              <img className={styles.galleryPic} src={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
