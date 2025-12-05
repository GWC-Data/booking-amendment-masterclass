import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Logistics" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            AI-Powered Booking Amendment{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Masterclass
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn how AI can transform logistics operations — and build your first intelligent workflow for free.
          </p>
          
          {/* Hosts */}
          <div className="py-6">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Hosted by:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
              <div>
                <span className="font-bold text-foreground">Subash</span>
                <span className="text-muted-foreground"> — CTO, GWC Data.AI</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-primary" />
              <div>
                <span className="font-bold text-foreground">Mamtha</span>
                <span className="text-muted-foreground"> — Assistant Director, GWC Data.AI</span>
              </div>
            </div>
          </div>
          
          {/* Tag line */}
          <p className="text-base text-muted-foreground border-l-4 border-primary pl-4 inline-block">
            A hands-on, business-friendly session for logistics teams and transformation leaders.
          </p>
          
          {/* CTA */}
          <div className="pt-6">
            <Button 
              variant="gradient" 
              size="xl"
              className="group font-bold"
            >
              Reserve Your Spot Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
