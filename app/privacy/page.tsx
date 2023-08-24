import React from "react";

const disclaimers = (): { title: string; message: string }[] => [
  {
    title: "Introduction",
    message:
      'Welcome to Your Deli! Your privacy is important to us. This Privacy Policy explains how Your Deli ("we," "us," or "our") collects, uses, discloses, and safeguards your personal information when you use our delivery app ("Your Deli"). By using the App, you agree to the terms of this Privacy Policy.',
  },
  {
    title: "Location Information: ",
    message:
      "The App uses background location services to determine your approximate location. This is essential for connecting restaurants with nearby drivers to fulfill delivery orders efficiently.",
  },
  {
    title: "Order Fulfillment:",
    message:
      "We use your personal and location information to match you with nearby restaurant orders and facilitate order delivery.",
  },
  {
    title: "Communication:",
    message:
      "We may use your contact details to send you order updates, delivery notifications, and promotional offers related to the App. You can opt-out of promotional communications.",
  },
  {
    title: "Improvements:",
    message:
      "We analyze usage patterns to improve the App's functionality, user experience, and features.",
  },
  {
    title: "Legal Compliance:",
    message:
      "We may use your information to comply with legal obligations, respond to legal requests, and enforce our terms and policies.",
  },
  {
    title: "Service Providers:",
    message:
      "We may share your information with third-party service providers who assist us in operating the App, processing payments, analyzing data, and providing customer support.",
  },
  {
    title: "Legal and Safety:",
    message:
      "We may disclose your information to comply with legal requirements, protect our rights and safety, investigate fraud, and respond to government requests.",
  },
  {
    title: "Location Services:",
    message:
      "You can enable or disable location services through your device settings. However, disabling location services may impact the App's functionality.",
  },
  {
    title: "Data Security",
    message:
      "We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is entirely secure.",
  },

  {
    title: "Children's Privacy",
    message:
      "We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is entirely secure.",
  },
  {
    title: "Changes to this Polic",
    message:
      "We may update this Privacy Policy periodically to reflect changes in our practices and services. We will notify you of any material changes through the App or other means.",
  },
  {
    title: "Contact Us",
    message:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at melendez@robertdev.net",
  },
];

const Terms = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col p-6">
      <h2 className="text-2xl font-bold">Privacy Policy for Your Deli</h2>
      <div>
        {disclaimers().map((disclaimer) => (
          <div className="py-4">
            <h1 className="text-2xl font-bold py-4">{disclaimer.title}</h1>
            <p>{disclaimer.message}</p>
          </div>
        ))}
      </div>
      <div className="my-4">
        <p>Thank you for choosing Your Deli for your food delivery needs!</p>
        <p className="py-4">Sincerely,</p>
        <p>Robert Melendez</p>
        <p>Founder, Your Deli Food Delivery App</p>
        <i className="text-gray-500 text-xs italic my-4 text-right">
          Last Updated: 08/23/2023
        </i>
      </div>
    </div>
  );
};

export default Terms;
