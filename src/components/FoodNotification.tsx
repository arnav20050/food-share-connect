
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Clock } from 'lucide-react';
import { FoodDonation, useFoodStore } from '@/store/foodStore';
import { Link } from 'react-router-dom';

interface FoodNotificationProps {
  donation: FoodDonation;
  onRead?: () => void;
}

const FoodNotification: React.FC<FoodNotificationProps> = ({ donation, onRead }) => {
  const markNotificationAsRead = useFoodStore(state => state.markNotificationAsRead);
  
  // Format the creation date to display in a human-readable format
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  const handleMarkAsRead = () => {
    markNotificationAsRead(donation.id);
    if (onRead) onRead();
  };

  return (
    <Card className="w-full mb-3 border-l-4 border-l-food-green-500 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-medium">{donation.title}</CardTitle>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">New</Badge>
        </div>
        <CardDescription className="flex items-center text-xs">
          <Bell size={12} className="mr-1" />
          <span>{formatDate(donation.createdAt)}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="py-2">
        <div className="text-sm space-y-1">
          <div className="flex items-center text-gray-600">
            <Calendar size={14} className="mr-2" />
            <span>Available: {new Date(donation.availableDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={14} className="mr-2" />
            <span>Time: {donation.availableTime}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between gap-2">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleMarkAsRead}
          className="text-gray-500"
        >
          Dismiss
        </Button>
        <Link to={`/request-food/${donation.id}`} className="w-auto">
          <Button 
            size="sm" 
            className="bg-food-green-500 hover:bg-food-green-600"
            onClick={handleMarkAsRead}
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FoodNotification;
