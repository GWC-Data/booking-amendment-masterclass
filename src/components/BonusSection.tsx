import { Card } from "@/components/ui/card";
import { Gift, Bot, TestTube, FileText, Award, Sparkles } from "lucide-react";

const bonuses = [
  {
    icon: Bot,
    text: "3 ready-to-use logistics AI agents",
  },
  {
    icon: TestTube,
    text: "A secure hands-on test environment",
  },
  {
    icon: FileText,
    text: "Template workflows for booking amendment automation",
  },
  {
    icon: Award,
    text: "A certificate of participation",
  },
  {
    icon: Sparkles,
    text: "Exclusive post-event resources & best practices",
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-strong border-2 border-[#f27066]/30 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27066] opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f27066] opacity-10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f27066] shadow-glow mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Your Post-Session{" "}
                  <span className="bg-gradient-to-r from-[#f27066] to-[#f27066]/50 bg-clip-text text-transparent">
                    Takeaways
                  </span>
                </h2>
              </div>
              
              {/* Bonus List */}
              <div className="space-y-4 mb-8">
                {bonuses.map((bonus, index) => {
                  const Icon = bonus.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-smooth"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#f27066] flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-lg text-foreground pt-2">{bonus.text}</p>
                    </div>
                  );
                })}
              </div>
              
              {/* Footer */}
              <div className="text-center pt-6 border-t border-border">
                <p className="text-muted-foreground italic">
                  Designed to help you start automating immediately.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
