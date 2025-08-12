import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerBackground from '../assets/sign.jpg';
import { signInWithGoogle } from '../firebase';
import googleLogo from '../assets/google.png';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!form.agree) {
      alert("You must agree to the terms.");
      return;
    }
    console.log("Register form submitted!", form);
    navigate('/signin');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log('Google user:', result.user);
      navigate('/');
    } catch (error) {
      console.error('Google Sign-in error:', error.message);
    }
  };

  return (
   <div className="bg-[#f8f1e9]">
  <div className="container mx-auto flex flex-col md:flex-row min-h-min mt-12 items-center justify-center px-4 md:px-8 lg:px-24 gap-10">

    {/* Left Column: Background Image */}
    <div
      className="hidden lg:flex flex-1 min-h-[800px] min-w-[700px] md:h-full bg-cover bg-center rounded-lg justify-center items-center mt-20"
      style={{ backgroundImage: `url(${registerBackground})` }}
    />

    {/* Right Column: Form with Animation */}
    <motion.div
      className="flex flex-1 justify-center items-center w-full md:w-auto p-0 md:p-0"
      initial={{ opacity: 0, x: 100 }}     
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg">
        <div>
          <h2 className="mt-10 text-center text-3xl font-extrabold text-gray-900">
            Create an Account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Google Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="group relative flex items-center justify-center py-2 px-4 w-full border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Name */}
          <div>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <input
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <input
              name="confirmPassword"
              type="password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center mt-4">
            <input
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              By continuing, you agree to our Terms of Use and Privacy Policy.
            </label>
          </div>

          {/* Register Button */}
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              REGISTER
            </button>
          </div>

          {/* Already have account */}
          <div className="text-center text-sm mt-8">
            <span className="text-gray-600">Already have an account? </span>
            <button
              type="button"
              onClick={handleSignInClick}
              className="font-medium text-yellow-700 hover:text-yellow-800 focus:outline-none focus:underline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  </div>
</div>

  );
}

