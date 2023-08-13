"use client";
import React from "react";
import Link from "next/link";

const Success: React.FC = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Email Sent Successfully</h1>
        <p className="py-6 mb-5">
          Your email has been successfully sent. We'll get back to you soon.
        </p>

        <Link
          className="text-white p-2 mt-5 bg-slate-400 rounded-sm px-8 py-2"
          as="/"
          href="/"
          replace
          passHref
        >
          Got it!
        </Link>
      </div>
    </div>
  );
};

export default Success;
