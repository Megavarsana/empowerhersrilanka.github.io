
import React, { useState } from 'react';
import { FormContainer, FormField, TextareaField, SubmitButton } from './ModernForm';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const SupportForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    supportType: '',
    urgency: '',
    description: '',
    anonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Support Request Submitted",
        description: "Your request has been received. Our team will respond within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        supportType: '',
        urgency: '',
        description: '',
        anonymous: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <FormContainer
        title="Request Support"
        subtitle="We're here to help you through any challenge"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Your Name"
              id="name"
              placeholder="Enter your name (optional if anonymous)"
              value={formData.name}
              onChange={handleChange}
            />
            <FormField
              label="Email Address"
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-light text-gray-600 tracking-wide">
              Type of Support Needed <span className="text-empowerher-pink">*</span>
            </Label>
            <RadioGroup 
              value={formData.supportType} 
              onValueChange={(value) => handleRadioChange('supportType', value)}
              className="space-y-3"
            >
              {[
                'Mental Health Support',
                'Relationship Advice',
                'Workplace Issues',
                'Legal Guidance',
                'Health Concerns',
                'Other'
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value={option} 
                    id={option}
                    className="border-gray-300 text-empowerher-pink"
                  />
                  <Label 
                    htmlFor={option}
                    className="font-light text-gray-700 cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-light text-gray-600 tracking-wide">
              Urgency Level
            </Label>
            <RadioGroup 
              value={formData.urgency} 
              onValueChange={(value) => handleRadioChange('urgency', value)}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: 'low', label: 'Low - General inquiry' },
                { value: 'medium', label: 'Medium - Need help soon' },
                { value: 'high', label: 'High - Urgent support needed' }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value}
                    className="border-gray-300 text-empowerher-pink"
                  />
                  <Label 
                    htmlFor={option.value}
                    className="font-light text-gray-700 cursor-pointer text-sm"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <TextareaField
            label="Describe Your Situation"
            id="description"
            placeholder="Please share as much or as little as you're comfortable with. We're here to listen and support you."
            required
            rows={6}
            value={formData.description}
            onChange={handleChange}
          />

          <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl">
            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
              className="rounded border-gray-300 text-empowerher-pink focus:ring-empowerher-pink/20"
            />
            <Label 
              htmlFor="anonymous"
              className="font-light text-gray-700 cursor-pointer"
            >
              I prefer to remain anonymous in follow-up communications
            </Label>
          </div>

          <div className="pt-4">
            <SubmitButton loading={isSubmitting}>
              Submit Support Request
            </SubmitButton>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default SupportForm;
