import Section from "@/components/Section";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";


const HeroSection = () => {
  return (
    <Section id='home'>
      <div className="mx-auto flex max-w-6xl flex-col items-center bg-secondary/10">
        <div className="z-10 flex flex-col items-center gap-6 text-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-16"
          />
          <div>
            <h1 className="mb-6 text-primary text-2xl font-bold lg:text-5xl">
              Hult Prize at Khwopa College of Engineering
            </h1>
            <p className="text-muted-foreground lg:text-xl">
              First student-led event at Khwopa College of Engineering to
              promote social entrepreneurship and innovation.
            </p>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <a href="https://forms.gle/UDJ2ikLhLjA8NTAG6" target="_blank" className="hover:shadow-radial-blur">
              <Button className="transition-transform transform hover:scale-105">Register</Button>
            </a>
            <a href="https://bento.me/hultatkhce" target="_blank" className="hover:shadow-radial-blur">
              <Button variant="outline" className="transition-transform transform hover:scale-105">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </a>
          </div>
        <Socials  />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
