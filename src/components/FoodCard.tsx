
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FoodCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  quantity: string;
  expiryDate: string;
  distance?: string;
  donorName?: string;
  type: 'donation' | 'request';
  status?: 'available' | 'pending' | 'claimed' | 'completed';
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  quantity,
  expiryDate,
  distance,
  donorName,
  type,
  status = 'available'
}) => {
  // Format the expiry date to display in a human-readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Determine badge color based on status
  const getBadgeColor = () => {
    switch(status) {
      case 'available':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'claimed':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      default:
        return 'bg-green-100 text-green-800 hover:bg-green-200';
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {status && (
          <div className="absolute top-3 right-3">
            <Badge className={getBadgeColor()}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-poppins">{title}</CardTitle>
        <CardDescription>
          {donorName && <span>By {donorName}</span>}
          {distance && (
            <span className="ml-2 text-food-green-600 font-medium">
              {distance} away
            </span>
          )}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center text-sm mb-3">
          <div className="text-gray-600">
            <span className="font-medium">Quantity:</span> {quantity}
          </div>
          <div className="flex items-center text-food-orange-600">
            <Calendar size={16} className="mr-1" />
            <span>Expires: {formatDate(expiryDate)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        {type === 'donation' ? (
          <Link to={`/donation/${id}`} className="w-full">
            <Button className="w-full bg-food-green-500 hover:bg-food-green-600">
              Request This
            </Button>
          </Link>
        ) : (
          <Link to={`/request/${id}`} className="w-full">
            <Button className="w-full bg-food-orange-500 hover:bg-food-orange-600">
              View Details
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
