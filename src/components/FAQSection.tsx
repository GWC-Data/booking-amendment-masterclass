import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need technical or coding skills?",
    answer: "Not at all — this masterclass is designed for logistics and business teams. We'll guide you through everything step-by-step in a business-friendly way.",
  },
  {
    question: "Is the session completely free?",
    answer: "Yes — the session, materials, and test environment are completely free. You'll also get access to bonus agents and resources at no cost.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you will receive a digital certificate of participation after completing the masterclass.",
  },
  {
    question: "How long is the masterclass?",
    answer: "The session is designed to be comprehensive yet concise, allowing you to learn and build your first AI workflow in a single sitting.",
  },
  {
    question: "Can I access the materials after the session?",
    answer: "Absolutely! You'll have continued access to the test environment, bonus agents, and all resources shared during the session.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 border-border rounded-lg px-6 shadow-soft hover:shadow-strong transition-smooth"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
