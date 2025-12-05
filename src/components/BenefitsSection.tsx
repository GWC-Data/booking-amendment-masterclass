import { Card } from "@/components/ui/card";
import { Bot, Zap, PenTool, Gift, TestTube, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "Experience AI Agents",
    description: "See how an AI agent handles booking amendments end-to-end",
  },
  {
    icon: Zap,
    title: "Real-World Results",
    description: "Witness actual efficiency gains in logistics operations",
  },
  {
    icon: PenTool,
    title: "Build Your Workflow",
    description: "Create your first logistics workflow using AI — completely free",
  },
  {
    icon: Gift,
    title: "Bonus Agents",
    description: "Get access to 3 pre-built logistics agents",
  },
  {
    icon: TestTube,
    title: "Test Environment",
    description: "Receive a test environment for continued hands-on experimentation",
  },
  {
    icon: TrendingUp,
    title: "Best Practices",
    description: "Learn how leading teams improve SLAs and reduce manual workload",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why You Should{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Join
              </span>
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-soft hover:shadow-strong transition-smooth hover:scale-105 border-2 hover:border-primary/30 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-smooth">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
