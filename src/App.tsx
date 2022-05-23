import NavBarResidence from "./components/NavBarResidence";
import HeroHeader from "./components/HeroHeader";

import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import GallerySection from "./components/GallerySection";
import Turistice from "./components/Turistice";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import MapLocation from "./components/MapLocation";
import Facilities from "./components/Facilities";
import SemiHero from './components/SemiHero'
import ReactGA from "react-ga4";

ReactGA.initialize("G-Y15PCE8J0V");
ReactGA.send("pageview");
ReactGA.event("User scrolled to bottom");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarResidence />
      <SemiHero />
        {/* <HeroHeader /> */}
        {/* <GallerySection />
        <Reviews />
        <Facilities />
        <MapLocation />
        <Turistice /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
