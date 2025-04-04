
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-food-green-100 to-food-orange-100 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Share Food, <br />
              <span className="text-food-green-600">Reduce Waste,</span><br />
              <span className="text-food-orange-600">Build Community</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-md">
              Connect with people around you to share surplus food instead of throwing it away.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-food-green-500 hover:bg-food-green-600">
                  Get Started
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="text-food-green-600 border-food-green-600 hover:bg-food-green-50">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=1024"
                alt="People sharing food"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg transform -rotate-2">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-food-green-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" fill="#4CAF50" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 text-sm">Over</p>
                  <p className="text-gray-900 font-bold text-xl">5,000+ meals</p>
                  <p className="text-gray-600 text-sm">shared in our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
