
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">How FoodShareConnect Works</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-food-green-600">For Donors</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-food-green-100 flex items-center justify-center">
                    <span className="font-bold text-food-green-600">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Create an Account</h3>
                  <p className="text-gray-600">Sign up as a donor on our platform by providing basic information about you or your organization.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-food-green-100 flex items-center justify-center">
                    <span className="font-bold text-food-green-600">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">List Available Food</h3>
                  <p className="text-gray-600">Post details about the food you want to donate, including type, quantity, and pickup availability.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-food-green-100 flex items-center justify-center">
                    <span className="font-bold text-food-green-600">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Connect with Recipients</h3>
                  <p className="text-gray-600">Receive notifications when someone is interested in your donation. Communicate through our messaging system.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-food-green-100 flex items-center justify-center">
                    <span className="font-bold text-food-green-600">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Complete the Donation</h3>
                  <p className="text-gray-600">Arrange pickup or delivery with the recipient and mark the donation as completed.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="/register" className="inline-flex items-center bg-food-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-food-green-600 transition-colors">
                Start Donating Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-amber-600">For Recipients</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="font-bold text-amber-600">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Sign Up</h3>
                  <p className="text-gray-600">Create an account as a recipient, providing necessary information to help match you with appropriate donations.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="font-bold text-amber-600">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Browse Available Donations</h3>
                  <p className="text-gray-600">Search for available food donations in your area, filtering by food type, distance, and other preferences.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="font-bold text-amber-600">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Request Food</h3>
                  <p className="text-gray-600">Express interest in a donation and communicate with the donor through our secure messaging system.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="font-bold text-amber-600">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Receive Food</h3>
                  <p className="text-gray-600">Arrange pickup or delivery with the donor and confirm receipt of the donation.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="/register" className="inline-flex items-center bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-600 transition-colors">
                Find Food Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose FoodShareConnect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-food-green-500 mb-3">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Direct Connection</h3>
              <p className="text-gray-600">Connect directly with donors or recipients without middlemen or delays.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-food-green-500 mb-3">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Secure Messaging</h3>
              <p className="text-gray-600">Communicate safely through our in-platform messaging system.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-food-green-500 mb-3">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Community Impact</h3>
              <p className="text-gray-600">Join a community committed to reducing food waste and fighting hunger.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
