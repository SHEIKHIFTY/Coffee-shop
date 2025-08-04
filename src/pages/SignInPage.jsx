import React from 'react';
import { useNavigate } from 'react-router-dom';
import signInBackground from '../assets/sign.jpg';
import { signInWithGoogle } from '../firebase';
import googleLogo from '../assets/google.png';

export default function SignInPage() {
  const navigate = useNavigate();

  const handleRegisterNowClick = () => {
    navigate('/register');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted!");
    // Add your own auth logic here if needed
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Google login success:", result.user);
      navigate('/');
    } catch (err) {
      console.error("Google login error:", err.message);
    }
  };

  return (
    <div className="bg-[#f8f1e9]">
      <div className="container mx-auto flex flex-col md:flex-row min-h-min mt-12 items-center justify-center px-4 md:px-8 lg:px-24 gap-10">
        {/* Background Image */}
        <div
          className="hidden md:flex flex-1 min-h-[800px] min-w-[802px] md:h-full bg-cover bg-center rounded-lg justify-center items-center mt-20"
          style={{ backgroundImage: `url(${signInBackground})` }}
        />

        {/* Form */}
        <div className="flex flex-1 justify-left items-left w-full md:w-auto p-4 md:p-0">
          <div className="max-w-md w-full space-y-8 p-8 rounded-lg">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Welcome Back!
              </h2>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
              {/* Google Button Only - Centered */}
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

              {/* OR Separator */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Enter your e-mail"
                />
              </div>

              {/* Password Input */}
              <div className="mt-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              {/* Login Button */}
              <div className="flex items-center justify-between mt-6">
                <button
                  type="submit"
                  className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  LOGIN
                </button>
                <div className="text-sm">
                  <a href="#" className="font-medium text-yellow-700 hover:text-yellow-800">
                    Forgot Your Password?
                  </a>
                </div>
              </div>

              {/* Register Now */}
              <div className="text-center text-sm mt-8">
                <span className="text-gray-600">Don't Have An Account? </span>
                <button
                  type="button"
                  onClick={handleRegisterNowClick}
                  className="font-medium text-yellow-700 hover:text-yellow-800 focus:outline-none focus:underline"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
