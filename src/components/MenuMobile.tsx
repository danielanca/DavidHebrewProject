import { useState } from "react";
import { HashLink as Link, NavHashLink } from "react-router-hash-link";

import styles from "./../components/NavBarResidence.module.scss";

import strings from "../data/strings.json";

const MenuMobile = () => {
  const [BurgerOpen, setBurgerOpen] = useState(false);
  const burgerClickHandler = (event: boolean) => {
    setBurgerOpen(!BurgerOpen);
  };
  const closeBackdrop = () => {
    setBurgerOpen(false);
  };
  return (
    <>
      <div className={styles.menuMobileContainer}>
        <div
          className={styles.burgerElement}
          onClick={() => {
            burgerClickHandler(!BurgerOpen);
          }}
        >
          <div className={BurgerOpen ? `${styles.bar1} ${styles.bar1End}` : `${styles.bar1}`}></div>
          <div className={BurgerOpen ? `${styles.bar2} ${styles.bar2End}` : `${styles.bar2}`}></div>
          <div className={BurgerOpen ? `${styles.bar3} ${styles.bar3End}` : `${styles.bar3}`}></div>
        </div>
      </div>
      <div
        onClick={() => {
          burgerClickHandler(!BurgerOpen);
        }}
        className={BurgerOpen ? `${styles.backDropBackground} ${styles.active}` : `${styles.backDropBackground}`}
      ></div>
      <div className={BurgerOpen ? `${styles.burgerMenu} ${styles.activeBurger} ` : `${styles.burgerMenu}`}>
        <ul className={styles.ulMobile}>
          {Object.values(strings.navMenu).map((item) => (
            <li className={styles.liMobile}>
              <NavHashLink onClick={closeBackdrop} className={styles.HashLinkStyle} to={item.link}>
                {item.text}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuMobile;
