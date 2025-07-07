
import React, { useState } from 'react';
import { FormContainer, FormField, TextareaField, SubmitButton } from './ModernForm';
import { useToast } from '@/hooks/use-toast';

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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
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
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
            <FormField
              label="Email Address"
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <FormField
            label="Subject"
            id="subject"
            placeholder="What would you like to discuss?"
            required
            value={formData.subject}
            onChange={(e) => handleChange(e)}
          />

          <TextareaField
            label="Your Message"
            id="message"
            placeholder="Share your thoughts, questions, or concerns with us..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange(e)}
          />

          <div className="pt-4">
            <SubmitButton loading={isSubmitting}>
              Send Message
            </SubmitButton>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default ContactForm;
