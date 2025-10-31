import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-primary hover:bg-[#d68710] text-white shadow-lg hover:shadow-2xl',
    secondary: 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-2xl',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
