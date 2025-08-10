import { motion } from "framer-motion";
import logo from '../assets/logo.png';
import coffeeBeans from '../assets/coffee-beans.png';
import visa from '../assets/visa.png';

import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import mail from '../assets/mail.png';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-4 md:px-10 relative overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-[#f8f1e9] rounded-full filter blur-2xl opacity-50 z-0"></div>
      <div className="absolute left-0 bottom-0 w-60 h-60 bg-[#f8f1e9] rounded-full filter blur-2xl opacity-50 z-0"></div>

      <div className="container mx-auto lg:max-w-7xl relative z-10">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-6 gap-y-12 lg:gap-x-8 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Left Section */}
          <motion.div className="lg:col-span-2 space-y-6" variants={fadeUpVariant}>
            {/* Logo */}
            <motion.div className="flex items-center" variants={fadeInVariant}>
              <img src={logo} alt="MR. CAFE Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold text-gray-900">MY. CAFE</span>
            </motion.div>

            {/* Description */}
            <motion.p className="text-sm text-gray-600 max-w-xs leading-relaxed" variants={fadeUpVariant}>
              We collect the best quality of ingredients from market. With this best execution we provide our guest fresh & very Delicious Food.
            </motion.p>

            {/* Location and Image */}
            <motion.div className="flex flex-nowrap items-start gap-4 overflow-x-auto" variants={fadeUpVariant}>
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

              <motion.img
                src={coffeeBeans}
                alt="Coffee Beans"
                className="w-36 sm:w-48 md:w-40 lg:w-48 object-contain flex-shrink-0"
                variants={fadeInVariant}
              />
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6" variants={fadeUpVariant}>
            {/* Company */}
            <motion.div variants={fadeUpVariant}>
              <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-yellow-700">About</a></li>
                <li><a href="#" className="hover:text-yellow-700">Community</a></li>
                <li><a href="#" className="hover:text-yellow-700">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-700">Privacy Policy</a></li>
              </ul>
            </motion.div>

            {/* Menu */}
            <motion.div variants={fadeUpVariant}>
              <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-yellow-700">Coffee</a></li>
                <li><a href="#" className="hover:text-yellow-700">Drinks</a></li>
                <li><a href="#" className="hover:text-yellow-700">Food Items</a></li>
              </ul>
            </motion.div>

            {/* Keep In Touch */}
            <motion.div variants={fadeUpVariant}>
              <h4 className="font-semibold text-gray-800 mb-4">Keep In Touch</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>E-Mail Us</li>
                <li>Text Us</li>
                <li>(406) 555-0120</li>
              </ul>
            </motion.div>

            {/* Reservation */}
            <motion.div variants={fadeUpVariant}>
              <h4 className="font-semibold text-gray-800 mb-4">Reservation</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reservations are available for dinner, starting at <strong className="text-gray-900">3pm</strong> each day.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Visa and Social */}
          <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-6" variants={fadeUpVariant}>
            <motion.img src={visa} alt="Visa" className="h-16 w-auto object-contain" variants={fadeInVariant} />
            <motion.div className="flex space-x-4" variants={fadeInVariant}>
              <a href="#"><img src={facebook} alt="Facebook" className="h-10 hover:opacity-75" /></a>
              <a href="#"><img src={instagram} alt="Instagram" className="h-10 hover:opacity-75" /></a>
              <a href="#"><img src={twitter} alt="Twitter" className="h-10 hover:opacity-75" /></a>
              <a href="#"><img src={mail} alt="Mail" className="h-10 hover:opacity-75" /></a>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.p className="text-center text-sm text-gray-700 mt-8" variants={fadeUpVariant}>
            <a href="#" className="hover:text-yellow-700">Privacy Policy</a> /
            <a href="#" className="hover:text-yellow-700 ml-1">Cookie Policy</a> /
            All rights reserved. Coffee Address 2029
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
