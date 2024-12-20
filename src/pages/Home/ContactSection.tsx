import { Mail, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactFormInput = ({ type, name, placeholder, value, onChange }: ContactFormInputProps) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full p-2 rounded-md border border-input bg-background"
  />
);

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_4psow9h',
        'template_xi05gn6',
        form.current as unknown as HTMLFormElement,
        {
          publicKey: 'fASQoz3fdvYb8JuYZ',
        }
      );
      setSubmitStatus('success');
      resetForm();
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
      console.log('FAILED...', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      );
    }
    if (submitStatus === 'success') return 'Message Sent!';
    if (submitStatus === 'error') return 'Failed to Send';
    return 'Send Message';
  };

  const getButtonColor = () => {
    if (submitStatus === 'success') return 'bg-green-500 hover:bg-green-600';
    if (submitStatus === 'error') return 'bg-red-500 hover:bg-red-600';
    return '';
  };

  return (
    <section id="contact" className="py-16 bg-secondary/80">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ContactInfoItem Icon={Mail} text="hultprizeatkhwopa@gmail.com" />
            <ContactInfoItem Icon={MapPin} text="Libali, Bhaktapur" />
          </div>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <ContactFormInput
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <ContactFormInput
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-input bg-background"
            />
            <Button
              disabled={isSubmitting}
              className={`transition-transform transform hover:scale-105 ${getButtonColor()}`}
            >
              {getButtonContent()}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;