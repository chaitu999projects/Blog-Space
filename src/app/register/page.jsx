'use client'

import React, { useState } from 'react'
import { registrationServerAction } from '../RegestationServer/RegesterServerAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    } else if (userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formHandling = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    try {
      const userDetails = { userName, email, password };
      const result = await registrationServerAction(userDetails);
      if (result.success) {
        setSuccessMessage(result.message);
        setUserName(""); setEmail(""); setPassword("");
        setTimeout(() => router.push('/login'), 2000);
      } else {
        setErrors({ server: result.message || "Registration failed. Please try again." });
      }
    } catch (error) {
      setErrors({ server: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white px-4">
      <div className="max-w-md w-full space-y-8 bg-gradient-to-br from-purple-900/40 to-black/50 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-purple-700/50">
        
        {/* Title */}
        <div>
          <h2 className="text-center text-3xl font-extrabold text-purple-300 drop-shadow-md">
            Create Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link 
              href="/login" 
              className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Alerts */}
        {errors.server && (
          <div className="bg-red-800/50 p-3 rounded-md text-red-300 text-sm border border-red-600/40">
            {errors.server}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-800/50 p-3 rounded-md text-green-300 text-sm border border-green-600/40">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={formHandling}>
          <div className="space-y-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-purple-300">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className={`mt-1 block w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 border ${
                  errors.userName ? 'border-red-400' : 'border-purple-700'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm`}
                placeholder="Enter your username"
              />
              {errors.userName && <p className="mt-1 text-sm text-red-400">{errors.userName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 border ${
                  errors.email ? 'border-red-400' : 'border-purple-700'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-purple-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 border ${
                  errors.password ? 'border-red-400' : 'border-purple-700'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm`}
                placeholder="Create a password (min. 6 characters)"
              />
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 text-sm font-medium rounded-lg text-white ${
                isLoading 
                  ? 'bg-purple-700/70 cursor-not-allowed' 
                  : 'bg-purple-700 hover:bg-purple-600'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
