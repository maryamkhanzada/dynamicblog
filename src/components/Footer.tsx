

import React from 'react';
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between gap-4">
        {/* Text Section */}
        <p className="text-center text-lg font-semibold md:text-left">
          Maryam Khan <span className="mx-2">|</span> © 2024 DynamicBlog — @Quarter 2
        </p>
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}
