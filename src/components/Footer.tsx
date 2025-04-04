
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-full bg-food-green-500 p-2">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 4C10.9 4 10 4.9 10 6V12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V6C14 4.9 13.1 4 12 4Z" 
                    fill="white"
                  />
                  <path 
                    d="M6 7C5.4 7 5 7.4 5 8V12C5 14.8 7.2 17 10 17C10.3 17 10.7 16.9 11 16.9V18.5C9.2 18.2 7 17.2 7 14.5V20H9V21C9 21.6 9.4 22 10 22C10.6 22 11 21.6 11 21V14.9C11.1 14.9 11.1 15 11.2 15C12.1 15 13 14.7 13.7 14.2C14.5 13.6 15 12.9 15.3 12C15.9 12 16.5 11.9 17 11.6C17.8 11.1 18.3 10.3 18.8 9.5C19.6 9 20 8.1 20 7.1C20 5.4 18.6 4 17 4C15.9 4 15 4.6 14.5 5.3C14.3 5.7 14.2 6.1 14.1 6.5C14.1 6.7 14 6.8 14 7H15C15 8.7 13.5 10 11.8 10C9.9 10 9.1 9 9 7.2C9 7.1 9 7.1 9 7H12C12 6.4 11.6 6 11 6H6Z" 
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-2xl font-poppins font-bold text-gray-800">FoodShare<span className="text-food-green-500">Connect</span></span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Connecting food donors with those in need. Together, we can reduce food waste and fight hunger in our community.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-food-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-food-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-food-green-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/donate-food" className="text-gray-600 hover:text-food-green-500 transition-colors">
                  Donate Food
                </Link>
              </li>
              <li>
                <Link to="/find-food" className="text-gray-600 hover:text-food-green-500 transition-colors">
                  Find Food
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <span className="font-medium">Email:</span> info@foodshareconnect.org
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Address:</span> 123 Sharing St., Community City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} FoodShareConnect. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-600 hover:text-food-green-500 text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-food-green-500 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
