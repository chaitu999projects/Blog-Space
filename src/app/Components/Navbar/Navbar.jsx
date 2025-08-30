"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-cyan-400 tracking-wide drop-shadow-[0_0_12px_rgba(0,255,255,0.7)]">
          <Link href="/">BlogSpace</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/"
            className="relative text-gray-300 hover:text-cyan-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Home
          </Link>

          <Link
            href="/photos"
            className="relative text-gray-300 hover:text-pink-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Explore
          </Link>

          <Link
            href="/about"
            className="relative text-gray-300 hover:text-purple-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(128,0,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="relative text-gray-300 hover:text-green-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,128,0.9)] after:content-[''] after:block after:h-[2px] after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Contact
          </Link>

          <Link
            href="/api/auth/signout"
            className="relative text-gray-400 hover:text-red-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,50,50,0.9)] after:content-[''] after:block after:h-[2px] after:bg-red-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Logout
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/"
            className="relative text-gray-300 hover:text-cyan-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Home
          </Link>

          <Link
            href="/photos"
            className="relative text-gray-300 hover:text-pink-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Explore
          </Link>

          <Link
            href="/about"
            className="relative text-gray-300 hover:text-purple-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(128,0,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="relative text-gray-300 hover:text-green-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,128,0.9)] after:content-[''] after:block after:h-[2px] after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Contact
          </Link>

          <Link
            href="/api/auth/signout"
            className="relative text-gray-400 hover:text-red-400 font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,50,50,0.9)] after:content-[''] after:block after:h-[2px] after:bg-red-400 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Logout
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
