import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import AboutUs from "./AboutUs";
import CD from "./CD";
import Resource from "./Resource";
import Counter from "./Counter";

const Home = () => {
  return (
   <>
    <HeroSection />
    <AboutUs/>
    <CD/>
    <Resource/>
    <Counter/>
    <ContactSection/>
    <FAQSection/>
   </>
  )
}

export default Home;