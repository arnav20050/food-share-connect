
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Clock, Filter } from 'lucide-react';

const FindFoodPage: React.FC = () => {
  // Mock data for available food items
  const availableFoodItems = [
    {
      id: 1,
      title: 'Fresh Vegetables',
      description: 'Assorted fresh vegetables including carrots, tomatoes, and lettuce',
      quantity: '5 kg',
      location: 'Downtown Community Center',
      distance: '1.2 km',
      availableDate: '2025-04-05',
      availableTime: '10:00 AM - 2:00 PM',
      donor: 'Local Supermarket',
      imageUrl: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      title: 'Packaged Meals',
      description: 'Pre-packaged meals including pasta, rice dishes, and soups',
      quantity: '12 meals',
      location: 'Westside Food Pantry',
      distance: '3.5 km',
      availableDate: '2025-04-06',
      availableTime: '4:00 PM - 7:00 PM',
      donor: 'City Restaurant',
      imageUrl: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'Bread and Pastries',
      description: 'Freshly baked bread, pastries, and muffins',
      quantity: '20 items',
      location: 'Eastside Bakery',
      distance: '0.8 km',
      availableDate: '2025-04-05',
      availableTime: '6:00 PM - 7:30 PM',
      donor: 'Morning Bakery',
      imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Find Food</h1>
            <p className="text-gray-600 mt-2">Browse available food donations in your area</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <MapPin size={16} />
              Near Me
            </Button>
            
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              Filters
            </Button>
            
            <Button>
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="col-span-1 bg-white p-4 rounded-lg border shadow-sm">
            <h2 className="font-medium text-lg mb-4">Filter Results</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <Input placeholder="Enter your location" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Distance
                </label>
                <Select defaultValue="5km">
                  <SelectTrigger>
                    <SelectValue placeholder="Select distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1km">Within 1 km</SelectItem>
                    <SelectItem value="5km">Within 5 km</SelectItem>
                    <SelectItem value="10km">Within 10 km</SelectItem>
                    <SelectItem value="25km">Within 25 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Food Type
                </label>
                <Select defaultValue="all_types">
                  <SelectTrigger>
                    <SelectValue placeholder="Select food type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all_types">All Types</SelectItem>
                    <SelectItem value="vegetables">Vegetables & Fruits</SelectItem>
                    <SelectItem value="dairy">Dairy Products</SelectItem>
                    <SelectItem value="bakery">Bakery Items</SelectItem>
                    <SelectItem value="prepared">Prepared Meals</SelectItem>
                    <SelectItem value="pantry">Pantry Items</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Date
                </label>
                <Input type="date" />
              </div>
              
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableFoodItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <span className="text-sm text-gray-500">{item.distance}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <MapPin size={14} className="mr-1 text-gray-500" />
                        <span className="text-gray-600">{item.location}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Calendar size={14} className="mr-1 text-gray-500" />
                        <span className="text-gray-600">{item.availableDate}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Clock size={14} className="mr-1 text-gray-500" />
                        <span className="text-gray-600">{item.availableTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Qty: {item.quantity}</span>
                      <Button>Request</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FindFoodPage;
