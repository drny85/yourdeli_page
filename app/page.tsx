"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="min-h-screen mx-auto items-center justify-center flex flex-col mt-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 360 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.3 }}
      >
        <Image
          src="/logo.png"
          alt="Your Deli Logo"
          width={300}
          height={300}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.8 }}
        className="w-full max-w-lg mx-auto  h-full p-6 items-center justify-center flex flex-col"
      >
        <div className="flex justify-center items-center py-3 ">
          <p className="text-3xl font-bold">Welcome to Robert Dev</p>
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
        <div className="w-full rounded-md p-2 mt-6">
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
        </div>

        <div className="flex justify-center items-center py-3 ">
          <div
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/your-deli/id6447319520",
                "_blank"
              )
            }
            className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/ios.png"
              alt="App Store"
              width={400}
              height={200}
              className="w-full"
            />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=net.robertdev.yourdeli",
                "_blank"
              )
            }
            className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/android.png"
              alt="Google Play"
              width={350}
              height={200}
              className="w-full"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8, delay: 1.2 }}
        className="w-full max-w-lg mx-auto  items-center justify-center flex flex-col"
      >
        <p className="text-sm">@ RobertDev {new Date().getFullYear()}</p>
      </motion.div>
    </div>
  );
}

export default page;
