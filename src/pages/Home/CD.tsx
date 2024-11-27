const CampusDirectorMessage = () => {
    return (
      <section className="bg-secondary/10 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
            {/* Campus Director Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="/cd.jpg"
                alt="Campus Director"
                className="w-full h-full lg:w-full lg:h-full rounded-md object-cover shadow-lg border border-border"
              />
            </div>
  
            {/* Message Content */}
            <div className="lg:w-1/2 space-y-6 pt-20">
              <h2 className="text-4xl font-semibold text-primary">
                Adarsha Shrestha
              </h2>
              <p className="text-lg font-medium text-muted-foreground">
                Campus Director, Hult Prize at Khwopa College of Engineering 2024
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "Empowering students to envision and create solutions for global
                challenges has always been at the heart of the Hult Prize. I am
                thrilled to see the innovative ideas and dedication of our
                participants as they work towards creating impactful social
                enterprises. Let’s continue to push boundaries and make a
                difference together!"
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CampusDirectorMessage;
  