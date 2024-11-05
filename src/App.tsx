import HeroSection from "@/sections/HeroSection";
import Footer from "@/sections/Footer";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";
import PastYearSection from "./sections/PastYearSection";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <>
    <Navbar />  
    <HeroSection />
    <PastYearSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    </>
  );
};

export default App;
