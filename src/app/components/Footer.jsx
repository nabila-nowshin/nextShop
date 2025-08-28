// src/components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">ProductPulse</h2>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} ProductPulse. All rights reserved.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-center md:space-x-6 justify-center">
          <a href="/" className="hover:text-white transition duration-300">
            Home
          </a>
          <a
            href="/products"
            className="hover:text-white transition duration-300"
          >
            Products
          </a>

          <a href="/login" className="hover:text-white transition duration-300">
            Login
          </a>
        </div>

        {/* Right side - Social Links */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:bg-blue-500 p-2 rounded-full text-gray-200 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:bg-blue-400 p-2 rounded-full text-gray-200 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:bg-blue-600 p-2 rounded-full text-gray-200 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:bg-pink-500 p-2 rounded-full text-gray-200 hover:text-white transition transform hover:scale-110 duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom bar */}
      <div className="text-gray-500 text-sm text-center py-3">
        Made with ❤️ by Nabila
      </div>
    </footer>
  );
}
