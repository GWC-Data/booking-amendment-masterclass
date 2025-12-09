import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles, Users, Calendar, Clock, ArrowRight } from "lucide-react";
import LOGO from "@/assets/logo.svg";
import { Link } from "react-router-dom";

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
          <div className="flex justify-center items-center mb-3">
              <img src={LOGO} alt="LOGO" className="w-[250px]" />
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary bg-background/50 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Masterclass • Limited Seats
              </span>
            </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Agentic AI For Logistics{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Masterclass
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn how AI can transform logistics operations — and build your first intelligent workflow for free.
          </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-purple-600" />
                              <div>
                                <p className="text-xs text-left text-gray-600 font-semibold uppercase">
                                  Date
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                  December 18 (Thursday)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-purple-600" />
                              <div>
                                <p className="text-xs text-left text-gray-600 font-semibold uppercase">
                                  Time
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                  8:00 PM IST
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
          
          {/* Tag line */}
          <p className="text-base text-muted-foreground border-l-4 border-primary pl-4 inline-block">
            A hands-on, business-friendly session for logistics teams and transformation leaders.
          </p>
          
          {/* CTA */}
          <div className="pt-6">
            <Link to="/registration" target="_blank">
              <Button 
                variant="gradient" 
                size="xl"
                className="group font-bold"
              >
                Reserve Your Spot Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
