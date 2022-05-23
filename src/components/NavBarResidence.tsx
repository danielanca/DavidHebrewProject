import { HashLink as Link, NavHashLink } from "react-router-hash-link";
// import ReactGA from 'react-ga4'

import images from "./../data/images";

import styles from "./NavBarResidence.module.scss";

import strings from "../data/strings.json";
import MenuMobile from "./MenuMobile";
import Banner from "./mini/Banner";
// import MenuMobile from './../components/MenuMobile';

const NavBarResidence = () => {
  const sendAnalyticsForGallery = () => {
    // ReactGA.event("User pressed on gallery")
  };
  const sendAnalyticsForAboutUs = () => {
    //  ReactGA.event("User pressed on AboutUs")
  };
  const sendAnalyticsForOffers = () => {
    // ReactGA.event("User pressed on Offers")
  };
  const sendAnalyticsForReviews = () => {
    //  ReactGA.event("User pressed on Reviews")
  };
  const sendAnalyticsForLocation = () => {
    //   ReactGA.event("User pressed on Location")
  };
  const sendAnalyticsForContactUs = () => {
    // ReactGA.event("User pressed on ContactUs")
  };

  return (
    <>
      <div className={styles.navbarContainer}>
        <MenuMobile />
        <ul className={styles.ulMenuEnd}>
          <li onClick={() => sendAnalyticsForReviews()} className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.desprenoi.link}>
              {strings.navMenu.desprenoi.text}
            </NavHashLink>
          </li>
          <li onClick={() => sendAnalyticsForOffers()} className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.produse.link}>
              {strings.navMenu.produse.text}
            </NavHashLink>
          </li>
        </ul>
        <div className={styles.middleNoUl}>
          <NavHashLink to={strings.navMenu.contact.link}>
            <img className={styles.navLogo} alt={"Logo"} src={images.logo} />
          </NavHashLink>
        </div>
        <ul className={styles.ulMenuStart}>
          <li onClick={() => sendAnalyticsForReviews()} className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.altele.link}>
              {strings.navMenu.altele.text}
            </NavHashLink>
          </li>
          <li onClick={() => sendAnalyticsForReviews()} className={styles.liItem}>
            <NavHashLink className={styles.HashLinkStyle} to={strings.navMenu.contact.link}>
              {strings.navMenu.contact.text}
            </NavHashLink>
          </li>
        </ul>
        {/* <div className={styles.phoneContainer}>
          <a href={"tel:" + strings.footer.address.phone}>
            <img className={styles.phoneIcon} src={images.phoneIcon} />
          </a>
        </div> */}
        {/* <Banner /> */}
      </div>
    </>
  );
};

export default NavBarResidence;
