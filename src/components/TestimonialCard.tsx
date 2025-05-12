
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  image?: string;
  content: string;
  rating?: number;
  className?: string;
  highlighted?: boolean;
}

const TestimonialCard = ({
  name,
  image,
  content,
  rating = 5,
  className,
  highlighted = false,
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-dark-light rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-gold/20 hover:shadow-lg", 
        highlighted && "border-2 border-gold",
        className
      )}
    >
      <div className="flex items-center mb-4">
        {image && (
          <div className="w-12 h-12 mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-full border-2 border-gold"
            />
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold text-white">{name}</h4>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "w-4 h-4", 
                  i < rating ? "text-gold fill-gold" : "text-gray-400"
                )} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-200">{content}</p>
    </div>
  );
};

export default TestimonialCard;
