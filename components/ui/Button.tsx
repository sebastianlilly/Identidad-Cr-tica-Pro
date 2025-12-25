import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-display font-bold py-4 px-8 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm md:text-base flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-white hover:text-brand-dark shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark",
    ghost: "text-gray-400 hover:text-brand-yellow"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};