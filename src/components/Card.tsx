import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  className?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  padding = 'md'
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-soft border border-neutral-100 overflow-hidden transition-all duration-200';
  
  const variantClasses = {
    default: baseClasses,
    hover: `${baseClasses} hover:shadow-medium hover:-translate-y-1`,
    interactive: `${baseClasses} hover:shadow-medium hover:-translate-y-1 cursor-pointer active:scale-95`
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const classes = `${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card; 