import styles from "./Reviews.module.scss";
import images from "./../data/images";
const Reviews = () => {
  return (
    <div id="reviews" className={styles.reviewContainer}>
      <a
        target="_blank"
        href="https://www.google.ro/search?q=casa+caly&hl=ro&biw=1495&bih=723&sxsrf=APq-WBunRugNGf6-NCL6lzZmLTfavb65BQ%3A1650062510732&ei=rvRZYuCrLJSGwPAPn6qcqAs&ved=0ahUKEwjgurzukZf3AhUUAxAIHR8VB7U4FBDh1QMIDQ&uact=5&oq=casa+caly&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyCAgAEIAEELADMgcIABCwAxAKMggIABCwAxDLATIICAAQsAMQywEyCAgAELADEMsBMggIABCwAxDLATIICAAQsAMQywEyCAgAELADEMsBMhMILhCABBDHARCvARDIAxCwAxgBMhIILhDHARCvARDIAxCwAxAKGAFKBAhBGAFKBAhGGABQAFgAYMUGaAJwAHgAgAEAiAEAkgEAmAEAyAELwAEB2gEECAEYCA&sclient=gws-wiz#lrd=0x4749699a23c4bf57:0x8c114191ab9b92d8,1,,,"
      >
        <img className={styles.googleStyle} src={images.googleReviews} />
      </a>
    </div>
  );
};

export default Reviews;
