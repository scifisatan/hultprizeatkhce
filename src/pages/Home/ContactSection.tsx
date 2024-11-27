import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfoItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const ContactInfoItem = ({ Icon, text }: ContactInfoItemProps) => (
  <div className="flex items-center gap-4">
    <Icon className="text-primary" />
    <span className="text-muted-foreground hover:text-primary/70">{text}</span>
  </div>
);

interface ContactFormInputProps {
  type: string;
  placeholder: string;
}

const ContactFormInput = ({ type, placeholder }: ContactFormInputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-2 rounded-md border border-input bg-background"
  />
);

const ContactSection = () => (
  <section id="contact" className="py-16 bg-secondary/80">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ContactInfoItem Icon={Mail} text="hultprize@khwopa.edu.np" />
          <ContactInfoItem Icon={Phone} text="+977 1234567890" />
          <ContactInfoItem Icon={MapPin} text="Libali, Bhaktapur" />
        </div>
        <form className="space-y-4">
          <ContactFormInput type="text" placeholder="Your Name" />
          <ContactFormInput type="email" placeholder="Your Email" />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 rounded-md border border-input bg-background"
          />
          <Button className=''>Send Message</Button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;