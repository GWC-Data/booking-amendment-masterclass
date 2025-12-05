import { Card } from "@/components/ui/card";
import { Bot, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Reimagining Booking Amendments with{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                AI
              </span>
            </h2>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - The Problem */}
            <Card className="p-8 shadow-soft hover:shadow-strong transition-smooth h-full border-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Challenge</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every day, logistics teams process countless booking amendment emails — checking schedules, 
                validating data, following SOPs, and coordinating with multiple internal systems.
              </p>
            </Card>
            
            {/* Right Column - The Solution */}
            <Card className="p-8 gradient-soft shadow-soft hover:shadow-strong transition-smooth h-full border-2 border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Solution</h3>
                </div>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                This masterclass walks you through how AI can fully automate this process, while keeping humans in control.
              </p>
              <p className="text-foreground leading-relaxed font-semibold">
                You will also learn how to design your own AI-driven decision workflow, guided step-by-step.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
