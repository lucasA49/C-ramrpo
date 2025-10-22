import HeroSection from "../Composants/HeroSection";
import Header from "../Composants/Header.jsx";
import ServicesSection from "../Composants/ServicesSection.jsx";
import AboutSection from "../Composants/AboutSection.jsx";
import Garanties from "../Composants/Garantie.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Garanties/>
    </>
  );
};

export default Home;
