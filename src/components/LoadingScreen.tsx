import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-large mx-auto mb-4">
            <span className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CC
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Civiconnect
          </h1>
          <p className="text-blue-100">
            Loading your community...
          </p>
        </div>
        <LoadingSpinner size="lg" color="white" />
      </div>
    </div>
  );
};

export default LoadingScreen; 