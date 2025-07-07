
import React, { useState } from 'react';
import { FormContainer, FormField, TextareaField, SubmitButton } from './ModernForm';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form with data:', formData);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Error calling edge function:', error);
        throw error;
      }

      console.log('Contact form submitted successfully:', data);

      toast({
        title: "Message Sent Successfully! 📧",
        description: "Thank you for reaching out. We've received your message and will get back to you soon. You should also receive a confirmation email.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again or contact us directly at empowerhersrilanka@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <FormContainer
        title="Get in Touch"
        subtitle="We're here to listen and support you"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Your Name"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <FormField
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <FormField
            label="Subject"
            id="subject"
            name="subject"
            placeholder="What would you like to discuss?"
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <TextareaField
            label="Your Message"
            id="message"
            name="message"
            placeholder="Share your thoughts, questions, or concerns with us..."
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />

          <div className="pt-4">
            <SubmitButton loading={isSubmitting}>
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </SubmitButton>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default ContactForm;
