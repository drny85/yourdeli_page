import React from "react";

const disclaimers = (): { title: string; message: string }[] => [
  {
    title: "Food Safety and Quality",
    message:
      "Your Deli is committed to providing you with delicious and high-quality meals. However, we cannot guarantee the quality, safety, or freshness of the food provided by our partner restaurants. It is advisable to exercise your own judgment and discretion when consuming any food ordered through our app",
  },
  {
    title: "Allergies and Dietary Restrictions",
    message:
      "While we strive to accommodate various dietary preferences and allergies, we cannot guarantee that the food provided by our partner restaurants will be allergen-free or suitable for your specific dietary needs. It is your responsibility to inform us of any allergies or restrictions and to double-check with the restaurant before placing an order.",
  },
  {
    title: "Accuracy of Information",
    message:
      "We make every effort to provide accurate and up-to-date information about the restaurants, menus, prices, and availability on our app. However, we do not guarantee the accuracy or completeness of this information and are not liable for any discrepancies or errors.",
  },
  {
    title: "Delivery Times: ",
    message:
      "We aim to deliver your orders in a timely manner. However, delivery times may vary based on factors beyond our control, such as traffic, weather conditions, and restaurant preparation times. We appreciate your understanding in such situations.",
  },
  {
    title: "Order Cancellations and Refunds",
    message:
      "Your Deli reserves the right to cancel or refuse any order at our discretion, including situations where the food is unavailable, pricing errors occur, or if fraudulent activity is suspected. Refunds for canceled orders or any issues related to the quality of food must be requested through our customer support within a reasonable timeframe.",
  },
  {
    title: "User Conduct",
    message:
      "You agree to use Your Deli app in a responsible and lawful manner. You shall not engage in any activity that could harm, disrupt, or compromise the functionality of the app, its users, or its partner restaurants",
  },
  {
    title: "Privacy",
    message:
      "Your Deli is committed to protecting your privacy. Your personal information will not be sold, exchanged, transferred, or given to any other third party without your prior permission. Your Deli is not responsible for any data loss or unauthorized access to your personal information.",
  },
  {
    title: "Changes to Terms",
    message:
      "Your Deli reserves the right to modify or update these terms and conditions at any time. We will notify you of any significant changes, but it is your responsibility to review the terms periodically.",
  },
  {
    title: "Terms of Service",
    message:
      "Your Deli is committed to providing you with the best possible service. Your use of the app constitutes acceptance of the Terms of Service and Privacy Policy.",
  },
];

const Terms = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col p-6">
      <h2 className="text-2xl font-bold">
        Disclaimer for Your Deli Food Delivery App
      </h2>
      <div>
        {disclaimers().map((disclaimer) => (
          <div className="py-4">
            <h1 className="text-2xl font-bold py-4">{disclaimer.title}</h1>
            <p>{disclaimer.message}</p>
          </div>
        ))}
      </div>
      <div className="my-4">
        <p className="py-2">
          By using Your Deli, you acknowledge and accept the terms and
          conditions outlined in this disclaimer. If you do not agree with any
          part of these terms, please refrain from using our app. Your safety,
          satisfaction, and delightful food experience are our top priorities.
        </p>
        <p>Thank you for choosing Your Deli for your food delivery needs!</p>
        <p className="py-4">Sincerely,</p>
        <p>Robert Melendez</p>
        <p>Founder, Your Deli Food Delivery App</p>
        <i className="text-gray-500 text-xs italic my-4 text-right">
          Last Updated: 08/09/2023
        </i>
      </div>
    </div>
  );
};

export default Terms;
