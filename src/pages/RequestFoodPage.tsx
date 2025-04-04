
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Search } from 'lucide-react';
import FoodCard from '@/components/FoodCard';

// Sample data for the food donations
const availableDonations = [
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
  },
  {
    id: '4',
    title: 'Organic Apples',
    description: 'Freshly picked organic apples from my backyard tree. Sweet and crisp.',
    imageUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=600',
    quantity: '5 kg',
    expiryDate: '2025-04-15',
    distance: '2.5 miles',
    donorName: 'Emily K.',
    type: 'donation' as const,
    status: 'available' as const
  },
  {
    id: '5',
    title: 'Pasta & Sauce',
    description: 'Unopened pasta packages and homemade tomato sauce. Perfect for a quick meal.',
    imageUrl: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&q=80&w=600',
    quantity: '4 servings',
    expiryDate: '2025-04-20',
    distance: '1.7 miles',
    donorName: 'Michael T.',
    type: 'donation' as const,
    status: 'available' as const
  },
  {
    id: '6',
    title: 'Rice & Beans',
    description: 'Extra rice and beans from catering. Still fresh and delicious.',
    imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=600',
    quantity: '6 servings',
    expiryDate: '2025-04-07',
    distance: '0.6 miles',
    donorName: 'Lisa M.',
    type: 'donation' as const,
    status: 'available' as const
  }
];

const RequestFoodPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [maxDistance, setMaxDistance] = useState<string>('');
  
  // Filter donations based on search criteria
  const filteredDonations = availableDonations.filter(donation => {
    const matchesSearch = searchTerm === '' || 
      donation.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      donation.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === '' || donation.type === 'donation';
    
    const matchesDistance = maxDistance === '' || 
      (parseFloat(donation.distance?.split(' ')[0] || '0') <= parseFloat(maxDistance));
    
    return matchesSearch && matchesType && matchesDistance;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              className="flex items-center text-gray-600" 
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
            </Button>
          </div>
          
          <h1 className="text-3xl font-bold mb-6 text-food-orange-600">Find Available Food</h1>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search for food..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="w-full sm:w-auto">
                <Select onValueChange={setSelectedType} value={selectedType}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Food Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="bakery">Bakery</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="canned">Canned Goods</SelectItem>
                    <SelectItem value="prepared">Prepared Meals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto">
                <Select onValueChange={setMaxDistance} value={maxDistance}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Max Distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Distance</SelectItem>
                    <SelectItem value="1">Within 1 mile</SelectItem>
                    <SelectItem value="2">Within 2 miles</SelectItem>
                    <SelectItem value="5">Within 5 miles</SelectItem>
                    <SelectItem value="10">Within 10 miles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Available Food ({filteredDonations.length})</h2>
            {filteredDonations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDonations.map(donation => (
                  <FoodCard key={donation.id} {...donation} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500 mb-4">No food donations match your search criteria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('');
                    setMaxDistance('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* No Donations Banner */}
          <div className="bg-food-orange-50 border border-food-orange-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-food-orange-700 mb-2">Not finding what you need?</h3>
            <p className="text-food-orange-600 mb-4">
              You can create a specific food request to let donors know what you're looking for.
            </p>
            <Button 
              variant="outline" 
              className="border-food-orange-500 text-food-orange-600 hover:bg-food-orange-100"
              onClick={() => navigate('/create-request')}
            >
              Create Food Request
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestFoodPage;
