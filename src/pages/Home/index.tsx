import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import AboutUs from "./AboutUs";
import CD from "./CD";
import Resource from "./Resource";
import Counter from "./Counter";
import SponsorsSection from "@/components/Sponsors";

const Home = () => {
  return (
   <>
    <HeroSection />
    <AboutUs/>
    <CD/>
    <Resource/>
    <Counter/>
    <SponsorsSection/>
    <ContactSection/>
    <FAQSection/>
   </>
  )
}

export default Home;