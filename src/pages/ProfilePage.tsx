
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Edit, User } from 'lucide-react';
import FoodCard from '@/components/FoodCard';

// Sample user data
const userData = {
  name: 'Jamie Smith',
  email: 'jamie.smith@example.com',
  joinDate: 'April 2025',
  location: 'San Francisco, CA',
  bio: 'Food enthusiast trying to reduce waste and help the community by sharing extra food.',
};

// Sample donations data
const userDonations = [
  {
    id: '101',
    title: 'Homemade Lasagna',
    description: 'Freshly made vegetarian lasagna. Can serve 6-8 people.',
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=600',
    quantity: '1 tray',
    expiryDate: '2025-04-07',
    type: 'donation' as const,
    status: 'available' as const,
  },
  {
    id: '102',
    title: 'Organic Fruits',
    description: 'Assorted organic fruits including apples, oranges and bananas.',
    imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600',
    quantity: '2 kg',
    expiryDate: '2025-04-09',
    type: 'donation' as const,
    status: 'claimed' as const,
  },
];

// Sample requests data
const userRequests = [
  {
    id: '201',
    title: 'Looking for Bread',
    description: 'In need of any type of bread for the next few days.',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    quantity: 'Any amount',
    expiryDate: '2025-04-15',
    type: 'request' as const,
    status: 'pending' as const,
  },
];

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

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
          
          <div className="max-w-5xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-food-green-100 flex items-center justify-center mr-4">
                      <User size={32} className="text-food-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{userData.name}</CardTitle>
                      <CardDescription>{userData.location} • Joined {userData.joinDate}</CardDescription>
                    </div>
                  </div>
                  <Button className="flex items-center gap-2" variant="outline">
                    <Edit size={16} />
                    Edit Profile
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{userData.bio}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Food Donor</Badge>
                  <Badge variant="secondary">Volunteer</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Activity Tabs */}
            <Tabs defaultValue="donations" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="donations">My Donations</TabsTrigger>
                <TabsTrigger value="requests">My Requests</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="donations">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Your Donations</h2>
                    <Button onClick={() => navigate('/donate-food')}>
                      Create New Donation
                    </Button>
                  </div>
                  
                  {userDonations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {userDonations.map(donation => (
                        <FoodCard key={donation.id} {...donation} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-xl">
                      <p className="text-gray-500 mb-4">You haven't created any donations yet</p>
                      <Button onClick={() => navigate('/donate-food')}>
                        Donate Food
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="requests">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Your Requests</h2>
                    <Button onClick={() => navigate('/create-request')}>
                      Create New Request
                    </Button>
                  </div>
                  
                  {userRequests.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {userRequests.map(request => (
                        <FoodCard key={request.id} {...request} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-xl">
                      <p className="text-gray-500 mb-4">You haven't created any food requests yet</p>
                      <Button onClick={() => navigate('/create-request')}>
                        Create Request
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="history">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">History</h2>
                  
                  <div className="text-center py-12 bg-white rounded-xl">
                    <p className="text-gray-500">No past donations or requests found</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
