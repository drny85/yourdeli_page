import React from 'react';

const Policy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for Drasco</h1>
      
      <p className="mb-4"><strong>Effective Date:</strong> 06/2024</p>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>Welcome to Drasco! This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our app. By using Drasco, you agree to the terms of this Privacy Policy.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        
        <h3 className="text-xl font-semibold mb-1">2.1 Personal Information:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Customer Information: Names, contact details, and details about customers' inspirations and preferences.</li>
          <li>User Information: Names, email addresses, and profile information of users (colleagues) using the app.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-1">2.2 Daily Tasks:</h3>
        <p className="mb-2">Information about daily tasks and activities that users enter into the app.</p>
        
        <h3 className="text-xl font-semibold mb-1">2.3 Usage Data:</h3>
        <p>Information on how you use the app, including interaction data, chat messages between colleagues, and access times.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>Provide, operate, and maintain our app.</li>
          <li>Improve, personalize, and expand our app.</li>
          <li>Understand and analyze how you use our app.</li>
          <li>Develop new products, services, features, and functionalities.</li>
          <li>Facilitate communication between colleagues for questions and collaboration.</li>
          <li>Keep your information organized and accessible.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">4. Information Sharing and Disclosure</h2>
        <p>We do not share your personal information with third parties except in the following circumstances:</p>
        <ul className="list-disc list-inside">
          <li>With your consent.</li>
          <li>For external processing by trusted partners who adhere to our privacy policies.</li>
          <li>To comply with laws or respond to lawful requests and legal processes.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee its absolute security.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside">
          <li>Access and update your personal information.</li>
          <li>Request the deletion of your personal information.</li>
          <li>Opt-out of certain data processing activities.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul className="list-disc list-inside">
          <li>Email: melendez@robertdev.net</li>
         
        </ul>
      </section>
    </div>
  );
};

export default Policy;
