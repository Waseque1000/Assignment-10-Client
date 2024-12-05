import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Visa Connect</h2>
            <p className="text-sm text-gray-400">
              Your trusted visa application partner.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">
            <p>Email: support@visaconnect.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Visa Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
