import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="bg-secondary/80 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {/* Text Side */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground">
              Transforming Ideas Into Impact
            </h2>
            <p className="text-md lg:text-lg font-medium text-primary">
              The World's Largest Student Impact Competition
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2009, the Hult Prize has been empowering young leaders to
              drive social change. With a US$1M global startup prize, we've
              engaged over 3 million students in solving the world's most
              pressing issues through social enterprise.
            </p>
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-border">
              <img
                src="/image.webp"
                alt="Hult2023"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/10 z-10" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex gap-2">
                  <div className="bg-muted rounded-full px-4 py-1 text-sm font-medium text-muted-foreground">
                    200+ Students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
