import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Users,
  Calendar,
  Clock,
  ArrowRight
} from "lucide-react";
import LOGO from "@/assets/logo.svg";
const HeroSection = () => {
  return (
    <div>
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

         <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27066] opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f27066] opacity-10 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="container mx-auto px-4 pt-10 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            
          <div className="flex justify-center items-center mb-3">
            <img src={LOGO} alt="LOGO" className="w-[250px]" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f27066]/20 bg-background/50 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#f27066]" />
              <span className="text-sm font-medium text-foreground">
                Masterclass • Limited Seats
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI-Powered Booking Amendment{" "}
              <span className="bg-gradient-to-r from-[#f27066] to-[#f27066]/40 bg-clip-text text-transparent">
                Masterclass
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn how AI can transform logistics operations — and build your first intelligent workflow for free.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-[#f27066]/10 to-[#f27066]/50 border border-[#f27066]/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#f27066]" />
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
              <div className="bg-gradient-to-br from-[#f27066]/10 to-[#f27066]/50 border border-[#f27066]/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#f27066]" />
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
            <p className="text-base text-muted-foreground border-l-4 border-[#f27066] pl-4 inline-block">
              A hands-on, business-friendly session for logistics teams and transformation leaders.
            </p>
            
            {/* CTA */}
            <div className="pt-2 flex justify-center">
              <Link
                to="/registration"
                target="_blank"
              >
                <button 
                  className="group font-bold bg-gradient-to-br from-[#f27066]/100 to-[#f27066]/60 text-white hover:text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center h-14 md:text-lg text-md"
                >
                  Reserve Your Spot Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f27066]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f27066]-light/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

       {/* <section
        className="relative overflow-hidden bg-gradient-to-br from-secondary to-accent pt-10 md:pb-32 md:pt-10 md:pb-32"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-accent/90" />
        <div className="container relative mx-auto px-4 pb-20 md:pb-0">
          <div className="flex justify-center items-center mb-10">
            <img src={LOGO} alt="LOGO" className="w-[250px]" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/50 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Masterclass • Limited Seats
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              AI-Powered Booking Amendment Masterclass
            </h1>
            <p className="mb-8 text-xl text-foreground/80 md:text-xl">
              Learn how AI can transform logistics operations - and build your first intelligent workflow for free.
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

            <div className=" flex justify-center items-center">
              <div className="w-fit bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">
                      Early Bird Offer — Limited Seats Available
                    </p>
                    <p className="text-sm text-gray-700 mb-1">
                      Enjoy{" "}
                      <span className="font-semibold text-amber-700">
                        50 free seats
                      </span>{" "}
                      exclusively for early registrants.
                    </p>
                    <p className="text-sm text-gray-700">
                      Additional attendees can join for only{" "}
                      <span className="font-semibold text-amber-700">
                        $9 per seat
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/registration"
              target="_blank"
            >
              <Button
                size="lg"
                className="group h-14 gap-2 px-8 md:text-lg text-md font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Book your spot
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>

  );
};

export default HeroSection;
