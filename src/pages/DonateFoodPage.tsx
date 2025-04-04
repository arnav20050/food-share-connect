
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

// Define the form schema using Zod
const formSchema = z.object({
  foodType: z.string({
    required_error: "Please select a food type.",
  }),
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  quantity: z.string().min(1, {
    message: "Quantity is required.",
  }),
  expiryDate: z.string().min(1, {
    message: "Expiry date is required.",
  }),
  availableDate: z.string().min(1, {
    message: "Available date is required.",
  }),
  availableTime: z.string().min(1, {
    message: "Available time is required.",
  }),
  image: z.any(),
});

type FormData = z.infer<typeof formSchema>;

const DonateFoodPage: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Initialize the form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodType: "",
      title: "",
      description: "",
      quantity: "",
      expiryDate: "",
      availableDate: "",
      availableTime: "",
      image: undefined,
    },
  });

  // Handle image change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue('image', file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      console.log('Donation data:', data);
      
      // Show success toast
      toast({
        title: 'Donation Posted Successfully!',
        description: 'Your food donation has been listed.',
        variant: 'default',
      });
      
      setIsLoading(false);
      
      // Navigate to dashboard after successful submission
      navigate('/dashboard');
    }, 1500);
  };

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
          
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-food-green-600">Donate Food</h1>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g., Fresh Vegetables, Homemade Bread, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="foodType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Food Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a food type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="vegetables">Vegetables</SelectItem>
                            <SelectItem value="fruits">Fruits</SelectItem>
                            <SelectItem value="bakery">Bakery Items</SelectItem>
                            <SelectItem value="dairy">Dairy Products</SelectItem>
                            <SelectItem value="meat">Meat & Poultry</SelectItem>
                            <SelectItem value="canned">Canned Goods</SelectItem>
                            <SelectItem value="packaged">Packaged Foods</SelectItem>
                            <SelectItem value="prepared">Prepared Meals</SelectItem>
                            <SelectItem value="beverages">Beverages</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide details about the food you're donating..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g., 2kg, 3 loaves, 5 servings, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="availableDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Available Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="availableTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Available Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            <Input 
                              type="file" 
                              accept="image/*" 
                              onChange={(e) => {
                                handleImageChange(e);
                                field.onChange(e);
                              }} 
                            />
                            {selectedImage && (
                              <div className="mt-4">
                                <p className="text-sm text-gray-500 mb-2">Preview:</p>
                                <img 
                                  src={selectedImage} 
                                  alt="Preview" 
                                  className="max-h-[200px] rounded-md object-cover" 
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-food-green-500 hover:bg-food-green-600" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Posting Donation...' : 'Post Donation'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonateFoodPage;
