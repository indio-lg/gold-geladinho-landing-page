
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard = ({
  icon: Icon,
  title,
  description,
  className,
}: BenefitCardProps) => {
  return (
    <div className={cn("bg-dark-light rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:shadow-gold/30 hover:scale-105", className)}>
      <div className="bg-gradient-gold w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg">
        <Icon className="text-dark w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default BenefitCard;
