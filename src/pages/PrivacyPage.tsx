
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-3xl">
          <p className="lead text-gray-600">
            Last Updated: April 4, 2025
          </p>
          
          <section className="mt-8">
            <h2>1. Information We Collect</h2>
            <p>
              At FoodShareConnect, we collect the following types of information:
            </p>
            <ul>
              <li><strong>Account Information:</strong> When you register, we collect your name, email address, password, and user type (donor or recipient).</li>
              <li><strong>Profile Information:</strong> You may choose to provide additional information such as your address, phone number, and organization details (if applicable).</li>
              <li><strong>Donation Information:</strong> For donors, we collect details about food donations including food type, quantity, pickup location, and available times.</li>
              <li><strong>Communication Data:</strong> We store messages sent between users on our platform.</li>
              <li><strong>Usage Information:</strong> We collect data about how you interact with our platform, including log data and device information.</li>
            </ul>
          </section>
          
          <section className="mt-6">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain the FoodShareConnect service.</li>
              <li>Match food donors with potential recipients.</li>
              <li>Facilitate communication between users.</li>
              <li>Improve and optimize our platform.</li>
              <li>Send notifications about donations, requests, and platform updates.</li>
              <li>Ensure the security and integrity of our service.</li>
            </ul>
          </section>
          
          <section className="mt-6">
            <h2>3. Information Sharing</h2>
            <p>
              We share your information in the following circumstances:
            </p>
            <ul>
              <li><strong>Between Users:</strong> When you make a donation or request food, certain information may be shared with other users to facilitate the exchange.</li>
              <li><strong>Service Providers:</strong> We may share data with third-party vendors who help us operate our service.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, including:
            </p>
            <ul>
              <li>Accessing and receiving a copy of your data</li>
              <li>Correcting inaccurate information</li>
              <li>Requesting deletion of your data</li>
              <li>Restricting or objecting to certain processing activities</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@foodshareconnect.org.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>6. Children's Privacy</h2>
            <p>
              Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes through our platform or via email.
            </p>
          </section>
          
          <section className="mt-6">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Email: privacy@foodshareconnect.org<br />
              Address: 123 Sharing St., Community City
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
