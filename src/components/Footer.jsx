import logo from '../assets/logo.png';
import coffeeBeans from '../assets/coffee-beans.png';
import visa from '../assets/visa.png';

import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import mail from '../assets/mail.png';

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-4 md:px-10 relative overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-[#f8f1e9] rounded-full filter blur-2xl opacity-50 z-0"></div>
      <div className="absolute left-0 bottom-0 w-60 h-60 bg-[#f8f1e9] rounded-full filter blur-2xl opacity-50 z-0"></div>

      <div className="container mx-auto lg:max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-12 lg:gap-x-8 mb-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="MR. CAFE Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold text-gray-900">MY. CAFE</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              We collect the best quality of ingredients from market. With this best execution we provide our guest fresh & very Delicious Food.
            </p>

            {/* Location and Image in a fixed row */}
            <div className="flex flex-nowrap items-start gap-4 overflow-x-auto">
              <div className="min-w-[180px] flex-shrink-0">
                <h4 className="font-semibold text-gray-800 mb-2">Our Location</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Above. It<br />
                  House# 20, Road# 69<br />
                  Sector# 11, DHAKA 1230
                </p>
                <a
                  href="#"
                  className="text-yellow-700 text-sm mt-2 inline-block underline hover:text-yellow-800"
                >
                  Find Us On Map
                </a>
              </div>

              <img
                src={coffeeBeans}
                alt="Coffee Beans"
                className="w-36 sm:w-48 md:w-40 lg:w-48 object-contain flex-shrink-0"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-yellow-700">About</a></li>
                <li><a href="#" className="hover:text-yellow-700">Community</a></li>
                <li><a href="#" className="hover:text-yellow-700">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-700">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-yellow-700">Coffee</a></li>
                <li><a href="#" className="hover:text-yellow-700">Drinks</a></li>
                <li><a href="#" className="hover:text-yellow-700">Food Items</a></li>
              </ul>
            </div>

            {/* Keep In Touch */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Keep In Touch</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>E-Mail Us</li>
                <li>Text Us</li>
                <li>(406) 555-0120</li>
              </ul>
            </div>

            {/* Reservation */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Reservation</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reservations are available for dinner, starting at <strong className="text-gray-900">3pm</strong> each day.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6">
          {/* Visa and Social */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-6">
            <img src={visa} alt="Visa" className="h-16 w-auto object-contain" />
            <div className="flex space-x-4">
              <a href="#"><img src={facebook} alt="Facebook" className="h-10 hover:opacity-75" /></a>
              <a href="#"><img src={instagram} alt="Instagram" className="h-10 hover:opacity-75" /></a>
              <a href="#"><img src={twitter} alt="Twitter" className="h-10 hover:opacity-75" /></a>
              <a href="#"><img src={mail} alt="Mail" className="h-10 hover:opacity-75" /></a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-700 mt-8">
            <a href="#" className="hover:text-yellow-700">Privacy Policy</a> /
            <a href="#" className="hover:text-yellow-700 ml-1">Cookie Policy</a> /
            All rights reserved. Coffee Address 2029
          </p>
        </div>
      </div>
    </footer>
  );
}
