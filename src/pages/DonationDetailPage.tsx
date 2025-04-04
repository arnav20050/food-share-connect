
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, ArrowLeft, Check, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useFoodStore, FoodDonation } from '@/store/foodStore';
import { toast } from 'sonner';

const DonationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const donations = useFoodStore(state => state.donations);
  const claimDonation = useFoodStore(state => state.claimDonation);
  
  const donation = donations.find(item => item.id === id);
  
  const handleClaimDonation = () => {
    if (donation) {
      claimDonation(donation.id);
      toast.success("Donation claimed successfully!", {
        description: "The donor will be notified of your request."
      });
      navigate('/dashboard');
    }
  };
  
  if (!donation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated={true} />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <Card className="w-full max-w-md text-center p-6">
            <h2 className="text-2xl font-bold mb-4">Donation Not Found</h2>
            <p className="text-gray-600 mb-6">The donation you're looking for might have been claimed or removed.</p>
            <Button onClick={() => navigate('/find-food')}>Browse Available Food</Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Format the date to display in a human-readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-gray-600" 
            onClick={() => navigate('/find-food')}
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Available Food
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={donation.imageUrl} 
                alt={donation.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className={donation.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                  {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{donation.title}</h1>
              {donation.donorName && (
                <p className="text-gray-600 mb-4">Donated by {donation.donorName}</p>
              )}
              
              <div className="border-t border-b border-gray-100 py-4 my-4">
                <p className="text-gray-700 whitespace-pre-line">{donation.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">
                      {donation.distance ? `${donation.distance} away` : 'Location information unavailable'}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">
                      Available: {formatDate(donation.availableDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">
                      Available Time: {donation.availableTime || 'Flexible'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 mr-2">Quantity:</span>
                    <span className="text-gray-700">{donation.quantity}</span>
                  </div>
                  
                  {donation.expiryDate && (
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 mr-2">Expires:</span>
                      <span className="text-gray-700">{formatDate(donation.expiryDate)}</span>
                    </div>
                  )}
                  
                  {donation.foodType && (
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 mr-2">Food Type:</span>
                      <span className="text-gray-700">{donation.foodType}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {donation.status === 'available' ? (
                  <>
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2" 
                      onClick={handleClaimDonation}
                    >
                      <Check size={18} />
                      Request This Donation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 flex items-center justify-center gap-2"
                      onClick={() => navigate('/messages')}
                    >
                      Message Donor
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2" 
                    disabled
                  >
                    <X size={18} />
                    This donation is no longer available
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonationDetailPage;
