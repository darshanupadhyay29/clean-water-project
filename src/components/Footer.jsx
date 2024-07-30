import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and description */}
          <div className="mb-4 md:mb-0 w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">
              Clean Water App
            </h2>
            <p className="text-sm text-center md:text-left">
              Dedicated to providing clean water and sanitation solutions
              worldwide.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0 w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
              Contact Us
            </h3>
            <p className="text-sm mb-1 text-center md:text-left">
              Email:{" "}
              <a
                href="mailto:info@cleanwaterapp.org"
                className="hover:underline"
              >
                info@cleanwaterapp.org
              </a>
            </p>
            <p className="text-sm mb-1 text-center md:text-left">
              Phone: +1 (123) 456-7890
            </p>
            <p className="text-sm text-center md:text-left">
              Address: 123 Water St, Clean City, CA 90001
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-4 md:mb-0 w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
              Stay Informed
            </h3>
            <form className="flex flex-col items-center md:items-start">
              <input
                type="email"
                              placeholder="Enter your email"
                              
                className="p-2 mb-2 rounded text-gray-800 w-full md:w-auto"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-white hover:text-gray-400 mx-2"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-gray-400 mx-2"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-gray-400 mx-2"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-gray-400 mx-2"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; 2024 Clean Water App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
