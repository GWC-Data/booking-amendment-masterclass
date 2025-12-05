import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This session showed us how AI can simplify one of our most complex workflows.",
    author: "Operations Manager",
    company: "Logistics",
    initial: "O",
  },
  {
    quote: "Clear, hands-on, and extremely relevant for our booking teams.",
    author: "Global Booking Desk Lead",
    company: "Freight Company",
    initial: "G",
  },
  {
    quote: "The bonus agents helped us experiment instantly.",
    author: "Digital Transformation Manager",
    company: "Supply Chain",
    initial: "D",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Participants{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Say
              </span>
            </h2>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-strong transition-smooth border-2 relative"
              >
                <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/20" />
                
                <div className="relative z-10 space-y-4">
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="gradient-primary text-primary-foreground font-bold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
