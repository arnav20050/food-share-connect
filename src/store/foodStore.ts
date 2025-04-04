
import { create } from 'zustand';
import { toast } from 'sonner';

export interface FoodDonation {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  quantity: string;
  expiryDate: string;
  availableDate: string;
  availableTime: string;
  distance?: string;
  donorName?: string;
  type: 'donation' | 'request';
  status: 'available' | 'pending' | 'claimed' | 'completed';
  createdAt: Date;
}

interface FoodStore {
  donations: FoodDonation[];
  notifications: FoodDonation[];
  addDonation: (donation: Omit<FoodDonation, 'id' | 'createdAt'>) => void;
  markNotificationAsRead: (id: string) => void;
  hasNewNotifications: boolean;
}

export const useFoodStore = create<FoodStore>((set) => ({
  donations: [
    {
      id: '1',
      title: 'Fresh Vegetables',
      description: 'A mix of fresh vegetables from my garden including tomatoes, cucumbers, and bell peppers.',
      imageUrl: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80&w=600',
      quantity: '2 kg',
      expiryDate: '2025-04-10',
      availableDate: '2025-04-05',
      availableTime: '14:00-17:00',
      distance: '1.2 miles',
      donorName: 'Sarah J.',
      type: 'donation' as const,
      status: 'available' as const,
      createdAt: new Date('2025-04-04T10:30:00')
    },
    {
      id: '2',
      title: 'Homemade Bread',
      description: 'Freshly baked sourdough bread, made this morning. Too much for my family.',
      imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
      quantity: '2 loaves',
      expiryDate: '2025-04-06',
      availableDate: '2025-04-04',
      availableTime: '18:00-20:00',
      distance: '0.8 miles',
      donorName: 'Mark R.',
      type: 'donation' as const,
      status: 'available' as const,
      createdAt: new Date('2025-04-04T09:15:00')
    },
    {
      id: '3',
      title: 'Canned Goods',
      description: 'Assorted canned beans, corn, and soup. All unopened with at least 6 months until expiration.',
      imageUrl: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&q=80&w=600',
      quantity: '10 cans',
      expiryDate: '2025-10-15',
      availableDate: '2025-04-06',
      availableTime: '10:00-16:00',
      distance: '3.1 miles',
      donorName: 'David L.',
      type: 'donation' as const,
      status: 'available' as const,
      createdAt: new Date('2025-04-03T16:45:00')
    },
    {
      id: '4',
      title: 'Organic Apples',
      description: 'Freshly picked organic apples from my backyard tree. Sweet and crisp.',
      imageUrl: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=600',
      quantity: '5 kg',
      expiryDate: '2025-04-15',
      availableDate: '2025-04-07',
      availableTime: '09:00-12:00',
      distance: '2.5 miles',
      donorName: 'Emily K.',
      type: 'donation' as const,
      status: 'available' as const,
      createdAt: new Date('2025-04-03T14:20:00')
    },
    {
      id: '5',
      title: 'Pasta & Sauce',
      description: 'Unopened pasta packages and homemade tomato sauce. Perfect for a quick meal.',
      imageUrl: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&q=80&w=600',
      quantity: '4 servings',
      expiryDate: '2025-04-20',
      availableDate: '2025-04-08',
      availableTime: '17:00-19:00',
      distance: '1.7 miles',
      donorName: 'Michael T.',
      type: 'donation' as const,
      status: 'available' as const,
      createdAt: new Date('2025-04-02T18:10:00')
    },
    {
      id: '6',
      title: 'Rice & Beans',
      description: 'Extra rice and beans from catering. Still fresh and delicious.',
      imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=600',
      quantity: '6 servings',
      expiryDate: '2025-04-07',
      availableDate: '2025-04-05',
      availableTime: '12:00-15:00',
      distance: '0.6 miles',
      donorName: 'Lisa M.',
      type: 'donation' as const,
      status: 'available' as const,
      createdAt: new Date('2025-04-02T11:30:00')
    }
  ],
  notifications: [],
  hasNewNotifications: false,
  addDonation: (donation) => {
    const newDonation = {
      ...donation,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date()
    };
    
    set((state) => ({ 
      donations: [newDonation, ...state.donations],
      notifications: [newDonation, ...state.notifications],
      hasNewNotifications: true
    }));
    
    toast.success('New food donation available!', {
      description: `${newDonation.title} has been added`,
    });
  },
  markNotificationAsRead: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(notification => notification.id !== id),
      hasNewNotifications: state.notifications.length > 1 // Still has notifications after removing this one
    }));
  },
}));
