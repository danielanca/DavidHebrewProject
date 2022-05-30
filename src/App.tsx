import NavBarResidence from './components/NavBarResidence';
import HeroHeader from './components/HeroHeader';

import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SemiHero from './components/SemiHero';
import ReactGA from 'react-ga4';
import AboutHebrew from './components/AboutHebrew';
import Products from './components/Products';

ReactGA.initialize('G-Y15PCE8J0V');
ReactGA.send('pageview');
ReactGA.event('User scrolled to bottom');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarResidence />
        <SemiHero />
        <AboutHebrew />
        <Products />
      </BrowserRouter>
    </div>
  );
}

export default App;
