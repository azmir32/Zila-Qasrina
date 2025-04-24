import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="glass-panel-sm flex-1 animate-fade-in hover:shadow-lg transition-all duration-300">
      <div className="card-icon bg-pink-50/30 rounded-full p-4 inline-flex mb-4">
        <Icon size={28} className="text-pink-600" />
      </div>
      <h2 className="text-xl font-semibold text-portfolio-dark mb-3 tracking-tight">{title}</h2>
      <p className="text-portfolio-gray text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
