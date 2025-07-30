import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  success = false,
  disabled = false,
  required = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  fullWidth = true,
  size = 'md'
}, ref) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const iconPadding = {
    sm: Icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '',
    md: Icon ? (iconPosition === 'left' ? 'pl-12' : 'pr-12') : '',
    lg: Icon ? (iconPosition === 'left' ? 'pl-14' : 'pr-14') : ''
  };

  const baseClasses = 'w-full border rounded-lg transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-offset-0';
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
    : success 
    ? 'border-green-300 focus:border-green-500 focus:ring-green-500' 
    : 'border-neutral-200 focus:border-primary-500 focus:ring-primary-500';

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50' : '';
  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${sizeClasses[size]} ${iconPadding[size]} ${stateClasses} ${disabledClasses} ${widthClass} ${className}`;

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <Icon 
            size={iconSize[size]} 
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 ${
              error ? 'text-red-400' : success ? 'text-green-400' : ''
            }`} 
          />
        )}
        
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={classes}
        />
        
        {Icon && iconPosition === 'right' && (
          <Icon 
            size={iconSize[size]} 
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 ${
              error ? 'text-red-400' : success ? 'text-green-400' : ''
            }`} 
          />
        )}
      </div>
      
      {error && (
        <p className="form-error">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 