import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col p-4">
      <div className="flex justify-center items-center py-3 ">
        <p className="text-2xl font-bold">Welcome to Your Deli</p>
      </div>
      <div>
        <p className="py-2 text-lg">
          If you have any question or issues please contact us at:{" "}
        </p>
        <p className="text-xl text-center">
          <a
            className="cursor-pointer text-blue-500 hover:underline text-lg"
            href="mailto:melendez@robertdev.net"
          >
            Email: melendez@robertdev.net
          </a>
        </p>
      </div>
      <div className="my-7">
        <Link href="/terms">
          <p className="cursor-pointer text-slate-500 hover:underline text-lg hover:text-xl transition-all">
            Terms and Conditions
          </p>
        </Link>
      </div>
      <div className="my-4">
        <Link href="/privacy">
          <p className="cursor-pointer text-slate-500 hover:underline text-lg hover:text-xl transition-all">
            Privacy Policy
          </p>
        </Link>
      </div>
      <div className="mt-6 bg-slate-50 rounded-md p-2 shadow-md px-6">
        <Link href="/contact">
          <p className="cursor-pointer text-slate-500 hover:underline text-lg hover:text-xl transition-all">
            Contact Us
          </p>
        </Link>
      </div>
      <div className="absolute bottom-10 right-10">
        <p className="text-sm">@ RobertDev {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default page;
