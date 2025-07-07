
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

interface TextareaFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  className
}) => (
  <div className="space-y-2">
    <Label 
      htmlFor={id} 
      className="text-sm font-light text-gray-600 tracking-wide"
    >
      {label} {required && <span className="text-empowerher-pink">*</span>}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={cn(
        "rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-empowerher-pink/20 focus:border-empowerher-pink/40 px-4 py-3 text-gray-700 placeholder:text-gray-400 font-light",
        className
      )}
    />
  </div>
);

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  id,
  placeholder,
  required = false,
  value,
  onChange,
  rows = 4,
  className
}) => (
  <div className="space-y-2">
    <Label 
      htmlFor={id} 
      className="text-sm font-light text-gray-600 tracking-wide"
    >
      {label} {required && <span className="text-empowerher-pink">*</span>}
    </Label>
    <Textarea
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      rows={rows}
      className={cn(
        "rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-empowerher-pink/20 focus:border-empowerher-pink/40 px-4 py-3 text-gray-700 placeholder:text-gray-400 font-light resize-none",
        className
      )}
    />
  </div>
);

interface FormContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  title,
  subtitle,
  className
}) => (
  <div className={cn(
    "bg-gradient-to-br from-pink-50/40 via-rose-50/30 to-orange-50/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50",
    className
  )}>
    {title && (
      <div className="text-center mb-8">
        <h3 className="text-2xl font-light text-gray-800 mb-2">{title}</h3>
        {subtitle && (
          <p className="text-gray-600 font-light">{subtitle}</p>
        )}
      </div>
    )}
    {children}
  </div>
);

interface SubmitButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  onClick,
  type = 'submit',
  className
}) => (
  <Button
    type={type}
    onClick={onClick}
    disabled={disabled || loading}
    className={cn(
      "w-full rounded-xl bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark text-white font-medium py-3 px-6 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
      className
    )}
  >
    {loading ? 'Processing...' : children}
  </Button>
);
