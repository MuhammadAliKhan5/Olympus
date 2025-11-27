import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Digital from './components/DigitalServices';
import TwoCards from './components/TwoCards';
import ThreeFeatureCards from './components/ThreeCards';
import FancyButton from './components/DiscoverBtn';
import Supported from './components/Supported';
import LogoMarquee from './components/Marquee';
import Masterpieces from './components/MasterPieces';
import SixCards from './components/SixCards';
import ExploreButton from './components/ExploreBtn';
import Transform from './components/Transform';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Digital />
      <TwoCards />
      <ThreeFeatureCards />
      <FancyButton />
      <Supported />
      <LogoMarquee />
      <Masterpieces />
      <SixCards />
      <ExploreButton />
      <Transform />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App;
