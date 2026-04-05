import React from 'react';

const Loader = ({ text = "Checking for new stories..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative w-16 h-16">
        {/* Spinner rings */}
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse rounded-full" />
      </div>
      <p className="text-text-muted font-medium animate-pulse">{text}</p>
    </div>
  );
};

export default Loader;
