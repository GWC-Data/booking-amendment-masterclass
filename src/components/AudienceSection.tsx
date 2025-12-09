import { Card } from "@/components/ui/card";
import { Ship, TruckIcon, Sparkles, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const audiences = [
  {
    icon: Ship,
    title: "Shipping & Logistics Teams",
    description: "Booking desks, customer service teams, L1/L2 operations.",
  },
  {
    icon: TruckIcon,
    title: "Freight & Supply Chain Leaders",
    description: "Teams seeking workflow automation and faster response times.",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation & AI Teams",
    description: "Looking to scale AI across operations.",
  },
  {
    icon: Headphones,
    title: "BPO / Shared Service Teams",
    description: "Managing high-volume booking amendments and customer emails.",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who this is{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                For
              </span>
            </h2>
          </div>
          
          {/* Audience Cards - Horizontal Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-soft hover:shadow-strong transition-smooth hover:scale-105 border-2 hover:border-primary/30 group bg-background"
                >
                  <div className="flex flex-col items-center text-center gap-4 h-full">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-smooth">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Decorative Divider */}
          <div className="mt-16 flex items-center justify-center">
            <div className="h-1 w-32 gradient-primary rounded-full" />
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/registration"
              target="_blank"
            >
              <button 
                className="group font-bold bg-gradient-to-br from-primary/100 to-primary/60 text-white hover:text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center h-14 md:text-lg text-md"
              >
                Lock In Your Seat Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
