// src/components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">ProductPulse</h2>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} ProductPulse. All rights reserved.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-center md:space-x-6">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/products" className="hover:text-white transition">
            Products
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="/login" className="hover:text-white transition">
            Login
          </a>
        </div>

        {/* Right side - Social Links */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 text-gray-500 text-sm text-center py-3 mt-4">
        Made with ❤️ by Nabila
      </div>
    </footer>
  );
}
