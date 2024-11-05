import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItemProps {
  value: string;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ value, question, answer }) => (
  <AccordionItem value={value}>
    <AccordionTrigger className="hover:text-primary">{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

const FAQSection = () => {
  const faqs = [
    {
      value: "item-1",
      question: "Who can participate?",
      answer: "Any current student at Khwopa College of Engineering can participate. Teams must consist of 3-4 members."
    },
    {
      value: "item-2",
      question: "How do I register?",
      answer: "Registration can be done through our online portal. Click the Register button at the top of the page to begin."
    },
    {
      value: "item-3",
      question: "What support is provided?",
      answer: "Teams receive mentorship, workshops, resources, and networking opportunities throughout the competition."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {faqs.map(faq => (
            <FAQItem key={faq.value} value={faq.value} question={faq.question} answer={faq.answer} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;