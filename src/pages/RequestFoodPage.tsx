
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
import { ArrowLeft, Bell, Search } from 'lucide-react';
import FoodCard from '@/components/FoodCard';
import FoodNotification from '@/components/FoodNotification';
import { useFoodStore } from '@/store/foodStore';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from '@/components/ui/badge';

const RequestFoodPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [maxDistance, setMaxDistance] = useState<string>('');
  
  const donations = useFoodStore(state => state.donations);
  const notifications = useFoodStore(state => state.notifications);
  const hasNewNotifications = useFoodStore(state => state.hasNewNotifications);
  
  // Filter donations based on search criteria
  const filteredDonations = donations.filter(donation => {
    const matchesSearch = searchTerm === '' || 
      donation.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      donation.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === '' || donation.foodType === selectedType;
    
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
          
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-food-orange-600">Find Available Food</h1>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative flex items-center gap-2">
                  <Bell size={16} />
                  Notifications
                  {hasNewNotifications && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-red-500">
                      {notifications.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>New Food Donations</SheetTitle>
                </SheetHeader>
                
                <div className="my-6 space-y-4">
                  {notifications.length > 0 ? (
                    notifications.map(donation => (
                      <FoodNotification key={donation.id} donation={donation} />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Bell size={32} className="mx-auto text-gray-300 mb-3" />
                      <p className="text-gray-500">No new notifications</p>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
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
