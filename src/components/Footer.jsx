import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 
      sm:grid-cols-2 md:grid-cols-3">

        {/*name Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-3">
            CS Ticket System
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted customer support platform. Manage tickets easily,
            resolve issues faster, and keep your customers happy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400 transition">
                Help Center
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-400 transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex space-x-4">

            <a
              href="https://www.facebook.com/nihsanga.cetana/"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/fahmida105623"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/fahmida-akter-tanjina-3b1986299/"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Fahmida0010"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaGithub />
            </a>
               <a
              href="https://www.youtube.com/@ciencefiction"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm px-4">
        © {new Date().getFullYear()} 
        <span className="text-green-400"> CS Ticket System</span>. 
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;