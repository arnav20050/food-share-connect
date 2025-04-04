
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-food-green-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-gray-600 hover:text-food-green-500 transition-colors">
            About
          </Link>
          <Link to="/how-it-works" className="font-medium text-gray-600 hover:text-food-green-500 transition-colors">
            How It Works
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link to="/profile">
                <Button>Profile</Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-food-green-500 hover:bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-3 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-600 hover:text-food-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-600 hover:text-food-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/how-it-works" 
              className="font-medium text-gray-600 hover:text-food-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">Dashboard</Button>
                </Link>
                <Link 
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full">Profile</Button>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link 
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
