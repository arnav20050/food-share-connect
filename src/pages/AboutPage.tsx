
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About FoodShareConnect</h1>
        
        <div className="space-y-6 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At FoodShareConnect, our mission is to reduce food waste and fight hunger by creating a direct connection between food donors and those in need. We believe that no good food should go to waste while people go hungry.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2023, FoodShareConnect is a community-driven platform designed to make food donation simple, efficient, and rewarding. Our team is made up of passionate individuals who believe in the power of technology to create positive social change.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-700 leading-relaxed">
              Our platform connects restaurants, grocery stores, events, and individuals with excess food to local shelters, food banks, and people in need. By simplifying the donation process, we help ensure that good food finds its way to those who need it most, rather than ending up in landfills.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-food-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-food-green-600">5,000+</p>
                <p className="text-gray-700 mt-2">Meals Shared</p>
              </div>
              <div className="bg-food-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-food-green-600">300+</p>
                <p className="text-gray-700 mt-2">Active Donors</p>
              </div>
              <div className="bg-food-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-food-green-600">500+</p>
                <p className="text-gray-700 mt-2">Recipients Helped</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're a potential donor with excess food or someone in need of assistance, FoodShareConnect welcomes you to our community. Together, we can make a difference in fighting hunger and reducing food waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="bg-food-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-food-green-600 transition-colors text-center">
                Register Now
              </a>
              <a href="/how-it-works" className="border border-food-green-500 text-food-green-500 px-6 py-3 rounded-md font-medium hover:bg-food-green-50 transition-colors text-center">
                Learn More
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
