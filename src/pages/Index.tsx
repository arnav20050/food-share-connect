
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import FoodCard from '@/components/FoodCard';
import { Link } from 'react-router-dom';

// Sample data for the food cards
const recentDonations = [
  {
    id: '1',
    title: 'Fresh Vegetables',
    description: 'A mix of fresh vegetables from my garden including tomatoes, cucumbers, and bell peppers.',
    imageUrl: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80&w=600',
    quantity: '2 kg',
    expiryDate: '2025-04-10',
    distance: '1.2 miles',
    donorName: 'Sarah J.',
    type: 'donation' as const,
    status: 'available' as const
  },
  {
    id: '2',
    title: 'Homemade Bread',
    description: 'Freshly baked sourdough bread, made this morning. Too much for my family.',
    imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    quantity: '2 loaves',
    expiryDate: '2025-04-06',
    distance: '0.8 miles',
    donorName: 'Mark R.',
    type: 'donation' as const,
    status: 'available' as const
  },
  {
    id: '3',
    title: 'Canned Goods',
    description: 'Assorted canned beans, corn, and soup. All unopened with at least 6 months until expiration.',
    imageUrl: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&q=80&w=600',
    quantity: '10 cans',
    expiryDate: '2025-10-15',
    distance: '3.1 miles',
    donorName: 'David L.',
    type: 'donation' as const,
    status: 'available' as const
  }
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                FoodShareConnect makes it easy to share surplus food with others in your community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-food-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-food-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Sign Up</h3>
                <p className="text-gray-600">
                  Create an account to join our community of food sharers and receivers.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-food-orange-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-food-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Share or Request</h3>
                <p className="text-gray-600">
                  Post your surplus food or browse available donations in your area.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-food-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-food-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Connect</h3>
                <p className="text-gray-600">
                  Arrange pickup or delivery and help reduce food waste in your community.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/how-it-works">
                <Button variant="outline" className="text-food-green-600 border-food-green-600 hover:bg-food-green-50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Recent Donations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Donations</h2>
              <Link to="/request-food">
                <Button variant="link" className="text-food-green-600">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentDonations.map(donation => (
                <FoodCard key={donation.id} {...donation} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-food-green-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Sharing?
            </h2>
            <p className="text-lg text-white opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of people who are already reducing food waste and helping their communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-food-green-600 hover:bg-gray-100">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-food-green-600">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
