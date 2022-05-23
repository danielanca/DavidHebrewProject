import images from "./../data/images";
import strings from "../data/strings.json";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <img className={styles.logoStyle} src={images.logo} />

        <div>
          {/* <ul className={styles.ulItem}>
            {Object.values(strings.footer.menuItems).map((item) => (
              <li className={styles.liItem}>{item.text}</li>
            ))}
          </ul> */}
        </div>
        <div className={styles.longLine}>
          {Object.values(strings.footer.address).map((item) => (
            <p className={styles.pFooter}>{item}</p>
          ))}
        </div>
        <div className={styles.copyrightItem}>
          <a href="https://danianca.ro">
            <p className={styles.footerText}>{strings.footer.copyrightStuff.copyText}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
