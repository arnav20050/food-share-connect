
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-3xl">
          <p className="lead text-gray-600">
            Last Updated: April 4, 2025
          </p>
          
          <section className="mt-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the FoodShareConnect platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>2. Description of Service</h2>
            <p>
              FoodShareConnect provides a platform for connecting food donors with individuals and organizations in need of food. We do not personally handle, transport, or verify the quality of any food items exchanged through our platform.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>3. User Responsibilities</h2>
            <p>
              As a user of FoodShareConnect, you agree to:
            </p>
            <ul>
              <li>Provide accurate and truthful information when registering and using the platform.</li>
              <li>Comply with all applicable food safety regulations when donating food.</li>
              <li>Not use the platform for any illegal or unauthorized purpose.</li>
              <li>Maintain the confidentiality of your account information.</li>
              <li>Report any suspicious or inappropriate behavior to FoodShareConnect.</li>
            </ul>
          </section>
          
          <section className="mt-6">
            <h2>4. Food Safety and Liability</h2>
            <p>
              All users understand and agree that:
            </p>
            <ul>
              <li>FoodShareConnect does not inspect, verify, or guarantee the safety, quality, or suitability of any food items exchanged through the platform.</li>
              <li>Donors are responsible for ensuring that donated food items are safe, properly handled, and accurately described.</li>
              <li>Recipients accept full responsibility for inspecting food items before consumption and assume all risks associated with accepting and consuming donated food.</li>
              <li>FoodShareConnect is not liable for any illness, injury, or damages resulting from food exchanged through our platform.</li>
            </ul>
          </section>
          
          <section className="mt-6">
            <h2>5. Prohibited Activities</h2>
            <p>
              The following activities are strictly prohibited:
            </p>
            <ul>
              <li>Posting false, misleading, or deceptive information.</li>
              <li>Donating expired, unsafe, or contaminated food items.</li>
              <li>Harassing, threatening, or abusing other users.</li>
              <li>Using the platform for commercial purposes without authorization.</li>
              <li>Attempting to disrupt or interfere with the operation of the platform.</li>
            </ul>
          </section>
          
          <section className="mt-6">
            <h2>6. Modifications to Terms</h2>
            <p>
              FoodShareConnect reserves the right to modify these Terms of Service at any time. We will notify users of substantial changes via email or through notices on our platform. Your continued use of FoodShareConnect after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: legal@foodshareconnect.org<br />
              Address: 123 Sharing St., Community City
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
