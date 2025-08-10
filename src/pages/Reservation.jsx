import React, { useState } from 'react';
import reserv from '../assets/reservation.png';
import { motion } from "framer-motion";

const Reservation = () => {
  const [step, setStep] = useState('find');

  return (
    <motion.div
  className="bg-[#f9f4ec] min-h-fit pt-20 pb-10 mt-20"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <div className="container mx-auto px-6 md:px-12 lg:px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* Left: Reservation Form */}
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-4">Reservation</h2>
        <p className="text-[#3e3e3e] max-w-xl mb-8">
          Reservations are available for dinner, starting at 3pm each day. For reservations of 9+ guests,
          please reach out to <a className="text-[#9b6b1a] underline" href="mailto:info@mrcafe.com">info@mrcafe.com</a>
        </p>

        <div className="border-b border-[#c4a75a] mb-6 flex items-center space-x-6">
          <label className="flex items-center space-x-2">
            <input type="radio" checked={step === 'find'} onChange={() => setStep('find')} className="form-radio text-[#9b6b1a]" />
            <span className="text-[#1a1a1a] font-medium">Find A Table</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" checked={step === 'details'} onChange={() => setStep('details')} className="form-radio text-[#9b6b1a]" />
            <span className="text-[#181313] text-bold">Your Details</span>
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <select className="w-full md:w-1/3 px-4 py-3 border rounded focus:outline-none">
            <option>Select People</option>
            {[...Array(10)].map((_, i) => (
              <option key={i}>{i + 1} {i === 0 ? 'Person' : 'People'}</option>
            ))}
          </select>

          <div className="w-full md:w-1/3 relative">
            <input type="date" className="w-full px-4 py-3 border rounded focus:outline-none pr-10" />
          </div>

          <div className="w-full md:w-1/3 relative">
            <input type="time" className="w-full px-4 py-3 border rounded focus:outline-none pr-10" />
          </div>
        </div>

        <button className="bg-[#9b6b1a] text-white px-6 py-3 rounded hover:bg-[#815a12] transition">
          Find Table
        </button>
      </div>

      {/* Right: Illustration Image */}
      <div className="flex justify-center lg:justify-end">
        <img src={reserv} alt="Cafe Illustration" className="w-full max-w-xl" />
      </div>
    </div>
  </div>
</motion.div>
  );
};

export default Reservation;
