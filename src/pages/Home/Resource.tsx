import { ArrowRight } from "lucide-react";

const ResourcesSection = () => {
    return (
        <div className=" bg-secondary/10 py-16">
            <div className=" mx-auto px-4">
                <div className="text-center mb-12">
                </div>

                <div className="max-w-4xl mx-auto">
                    <a
                        href="https://www.hult.edu/hp2025/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-border relative overflow-hidden"
                    >
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>

                        <div className=" relative z-10 flex items-center justify-center ">
                            <div className="space-y-4 text-center">
                                <h3 className="text-3xl font-bold text-foreground">
                                    Hult Prize 2024: UNLIMITED!
                                </h3>
                                <p className="text-lg text-muted-foreground  max-w-2xl text-center mx-auto">
                                    Once again, this year's event invites participants to pitch any idea for a social enterprise. The theme remains the same: ideas should be impactful and align with at least one of the United Nations Sustainable Development Goals (SDGs).
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-border/30 pt-4 flex justify-end items-center">

                        <span className="text-primary text-md flex items-center">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResourcesSection;
