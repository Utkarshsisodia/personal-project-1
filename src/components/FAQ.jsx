import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// FAQ Data - easy to update later
const faqs = [
  {
    question: "How long does it take to integrate?",
    answer:
      "Most teams are fully integrated and up-and-running within an afternoon. Our API is heavily documented, and we provide SDKs for all major frameworks including React, Vue, and Next.js.",
  },
  {
    question: "Do I need to enter my credit card for the free trial?",
    answer:
      "No, our 14-day free trial is completely commitment-free. We only ask for payment details when you decide to upgrade to a paid tier.",
  },
  {
    question: "Can I use my own custom domain?",
    answer:
      "Absolutely. All paid plans include custom domain support with free, automatically renewing SSL certificates.",
  },
  {
    question: "What happens if I exceed my monthly usage limits?",
    answer:
      "We will never cut off your service. If you exceed your limits, we'll send you a friendly email notification to discuss upgrading your plan. You get a 20% grace buffer before any hard caps apply.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. All data is encrypted at rest and in transit (AES-256). We are fully SOC2 Type II and GDPR compliant.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 mb-10 pb-40bg-muted/30 border-t border-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 bg-background">
            Support
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-background p-6 md:p-8 rounded-2xl border shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-base hover:text-primary transition-colors">
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
}
