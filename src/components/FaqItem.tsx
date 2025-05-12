
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

const FaqItem = ({ question, answer, className }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={cn("border-b border-gray-700 py-4", className)}>
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className={`text-gold text-xl transition-transform duration-300 ${isOpen ? "transform rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div 
        className={`mt-2 text-gray-300 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        {isOpen && <p className="py-2">{answer}</p>}
      </div>
    </div>
  );
};

export default FaqItem;
