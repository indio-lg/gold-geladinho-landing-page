
import React from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg' | 'sm';
  className?: string;
  animated?: boolean;
  href?: string;
}

const CTAButton = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  animated = false,
  href,
  ...props
}: CTAButtonProps) => {
  const baseStyles = "font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-gold text-dark-light hover:shadow-lg",
    secondary: "bg-pink text-white hover:bg-pink-light hover:shadow-lg",
  };
  
  const sizes = {
    default: "px-6 py-3 text-lg",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-xl",
  };
  
  const animation = animated ? "animate-pulse-gold" : "";
  
  if (href) {
    return (
      <a 
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], animation, className)}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], animation, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
