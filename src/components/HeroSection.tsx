import React from 'react';
import { Instagram, Facebook, MessageSquare, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full mt-6 mb-12">
      <div className="glass-panel">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark leading-tight">
                Let me shop for you
              </h1>
              <div className="flex flex-col gap-2">
                <span className="text-2xl md:text-3xl text-pink-600 font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  ✨ Fast delivery
                </span>
                <span className="text-2xl md:text-3xl text-pink-600 font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  💫 Easy process
                </span>
                <span className="text-2xl md:text-3xl text-pink-600 font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  ⭐ Reliable service
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-wrap gap-4 mt-8 mb-8">
              <button className="flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors duration-200 shadow-lg">
                <Phone size={20} />
                <span className="font-medium">Contact Me</span>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-portfolio-gray mr-2">Follow me:</span>
              <a href="#" className="social-icon" aria-label="Instagram profile">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="TikTok profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook profile">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp contact">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full h-full max-h-[400px] flex items-center justify-center">
              <img 
                src="/lovable-uploads/personalshopper.jpg" 
                alt="Personal Shopper" 
                className="object-cover h-full w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
