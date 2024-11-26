import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const nextCount = Math.floor(endValue * easeOutQuart);
      
      if (nextCount !== countRef.current) {
        setCount(nextCount);
        countRef.current = nextCount;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration, isVisible]);

  return (
    <span ref={elementRef} className="tabular-nums text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-secondary/50 py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Since 2009, we've been empowering students worldwide to create positive change through social entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 100, label: "Annual Participants", suffix: "+" },
            { value: 8, label: "Projects", suffix: "" },
            { value: 100, label: "Alumni", suffix: "+" },
            { value: 4, label: "Experts", suffix: "" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center transition-transform hover:scale-105"
            >
              <div className="text-5xl font-bold text-primary mb-2">
                <AnimatedCounter 
                  endValue={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-card-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
