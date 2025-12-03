import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import LogoDesign from './components/LogoDesign';
import BrandKit from './components/BrandKit';
import PosterDesign from './components/PosterDesign';
import CarouselInstagram from './components/CarouselInstagram';
import LandingPage from './components/LandingPage';
import HostingPlan from './components/HostingPlan';
import MeetTheDesigner from './components/MeetTheDesigner';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import BrandColors from './components/BrandColors';

function App() {
  return (
    <div className="font-['Poppins']">
      <Hero />
      <ServicesOverview />
      <LogoDesign />
      <BrandKit />
      <PosterDesign />
      <CarouselInstagram />
      <LandingPage />
      <HostingPlan />
      <MeetTheDesigner />
      <Portfolio />
      <BrandColors />
      <CallToAction />
    </div>
  );
}

export default App;
