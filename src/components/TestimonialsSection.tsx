import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This session showed us how AI can simplify one of our most complex workflows.",
  },
  {
    quote: "Clear, hands-on, and extremely relevant for our booking teams.",
  },
  {
    quote: "The bonus agents helped us experiment instantly.",
  },
  {
    quote: "The practical examples made it incredibly easy to understand how AI can be applied to our daily booking operations.",
  },
  {
    quote: "I was amazed at how quickly we could build a working workflow—this wasn’t just theory, it was real execution.",
  },
  {
    quote: "The session opened our eyes to automation possibilities we never thought were achievable with our current systems.",
  }
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
