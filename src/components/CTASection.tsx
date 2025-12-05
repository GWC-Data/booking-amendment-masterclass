import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#f27066] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f27066] opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#f27066] shadow-glow mb-4">
            <Users className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Join the AI Booking Amendment{" "}
            <span className="bg-gradient-to-r from-[#f27066] to-[#f27066]/50 bg-clip-text text-transparent">
              Masterclass
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform how booking amendments are handled — forever.
          </p>

          {/* CTA Button */}
          <div className="pt-6 flex items-center justify-center">
            <Link to="/registration" target="_blank">
              <button 
                  className="group font-bold bg-gradient-to-br from-[#f27066]/100 to-[#f27066]/60 text-white hover:text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center h-14 md:text-lg text-md"
              >
                Register Now – Limited Seats Available
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f27066] animate-pulse" />
              <span>100% Free</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f27066] animate-pulse delay-300" />
              <span>Hands-On Learning</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f27066] animate-pulse delay-700" />
              <span>Certificate Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
