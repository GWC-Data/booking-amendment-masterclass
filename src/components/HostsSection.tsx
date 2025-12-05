import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, Award } from "lucide-react";

const HostsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Hosts
              </span>
            </h2>
          </div>
          
          {/* Hosts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Host 1 */}
            <Card className="p-8 shadow-soft hover:shadow-strong transition-smooth border-2 hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24 border-4 border-primary/20">
                  <AvatarFallback className="text-2xl font-bold gradient-primary text-primary-foreground">
                    S
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-2xl font-bold mb-1">Subash</h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <p className="text-sm font-semibold">CTO, GWC Data.AI</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  A decade of experience empowering shipping and logistics operations through AI-driven solutions.
                </p>
                
                <div className="pt-2 flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">10+ Years in Logistics AI</span>
                </div>
              </div>
            </Card>
            
            {/* Host 2 */}
            <Card className="p-8 shadow-soft hover:shadow-strong transition-smooth border-2 hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24 border-4 border-primary/20">
                  <AvatarFallback className="text-2xl font-bold gradient-primary text-primary-foreground">
                    M
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-2xl font-bold mb-1">Mamtha</h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <p className="text-sm font-semibold">Assistant Director, GWC Data.AI</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Specialist in intelligent automation, workforce augmentation, and logistics process transformation.
                </p>
                
                <div className="pt-2 flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">Automation Expert</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
