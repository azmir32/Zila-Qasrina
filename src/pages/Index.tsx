import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ExpertiseCard from '../components/ExpertiseCard';
import { Star, Heart, MapPin } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
      <Header />
      <HeroSection />
      
      <section className="w-full mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <ExpertiseCard 
            icon={Star}
            title="Experience & Specialty"
            description="Specialized in fashion, lifestyle, and luxury goods with extensive knowledge of brands, trends, and quality assessment. Experienced in personal styling and wardrobe curation for diverse client needs."
          />
          
          <ExpertiseCard 
            icon={Heart}
            title="Why Choose Me?"
            description="Dedicated to providing personalized service, saving you time and ensuring you get the best value. I offer honest recommendations, exclusive deals, and a stress-free shopping experience tailored to your preferences and budget."
          />
          
          <ExpertiseCard 
            icon={MapPin}
            title="Areas Covered"
            description="Serving clients across major shopping districts and malls in the region. Available for both in-person and virtual shopping assistance, with delivery services to your preferred location."
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
