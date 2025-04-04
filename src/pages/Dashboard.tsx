
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome, User!</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Donate Food Card */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=600"
                  alt="Donate Food"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-poppins text-food-green-600">Donate Food</CardTitle>
                <CardDescription>Share your surplus food with those in need</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Have extra food that you don't want to waste? Help your community by donating it to someone who needs it.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate('/donate-food')}
                  className="w-full bg-food-green-500 hover:bg-food-green-600"
                >
                  Donate Food <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            {/* Request Food Card */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=600"
                  alt="Request Food"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-poppins text-food-orange-600">Request Food</CardTitle>
                <CardDescription>Find available food donations nearby</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Browse available food donations in your area and connect with donors to arrange pickup or delivery.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate('/request-food')}
                  className="w-full bg-food-orange-500 hover:bg-food-orange-600"
                >
                  Find Food <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Activity Summary */}
          <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Your Activity</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-food-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Donations Made</p>
                <p className="text-3xl font-bold text-food-green-600">0</p>
              </div>
              
              <div className="bg-food-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Food Received</p>
                <p className="text-3xl font-bold text-food-orange-600">0</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-3xl font-bold text-blue-600">0</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Messages</p>
                <p className="text-3xl font-bold text-purple-600">0</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="outline" onClick={() => navigate('/profile')}>
              View Profile
            </Button>
            <Button variant="outline" onClick={() => navigate('/messages')}>
              Messages
            </Button>
            <Button variant="outline" onClick={() => navigate('/history')}>
              Donation History
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
