import React from 'react';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

interface SkeletonComponent extends React.FC<SkeletonProps> {
  Text: React.FC<{ lines?: number; className?: string }>;
  Card: React.FC<{ className?: string }>;
  Avatar: React.FC<{ size?: number; className?: string }>;
  Button: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }>;
}

const Skeleton: SkeletonComponent = ({
  variant = 'text',
  width,
  height,
  className = ''
}) => {
  const baseClasses = 'animate-pulse bg-neutral-200 rounded';
  
  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const style = {
    width: width,
    height: height
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes} style={style} />
  );
};

// Compound components for common skeleton patterns
Skeleton.Text = ({ lines = 1, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} variant="text" />
    ))}
  </div>
);

Skeleton.Card = ({ className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    <div className="flex items-center space-x-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
    <Skeleton variant="text" />
    <Skeleton variant="text" width="80%" />
    <Skeleton variant="rectangular" height={200} />
  </div>
);

Skeleton.Avatar = ({ size = 40, className = '' }) => (
  <Skeleton variant="circular" width={size} height={size} className={className} />
);

Skeleton.Button = ({ size = 'md', className = '' }) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };
  
  return (
    <Skeleton 
      variant="rectangular" 
      width={100} 
      className={`${heightClasses[size]} ${className}`} 
    />
  );
};

export default Skeleton; 