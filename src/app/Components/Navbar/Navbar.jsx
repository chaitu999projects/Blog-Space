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

  const links = [
    { href: "/", label: "Home", color: "cyan-400" },
    { href: "/createblog/getblog", label: "Create Blog", color: "cyan-400" },
    { href: "/photos", label: "Explore", color: "pink-400" },
    { href: "/about", label: "About", color: "purple-400" },
    { href: "/contact", label: "Contact", color: "green-400" },
    { href: "/api/auth/signout", label: "Logout", color: "red-400" },
  ];

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
          {links.map(({ href, label, color }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-gray-300 hover:text-${color} font-medium transition duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.9)] after:content-[''] after:block after:h-[2px] after:bg-${color} after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left`}
            >
              {label}
            </Link>
          ))}
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
        <nav className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4">
          {links.map(({ href, label, color }) => (
            <Link
              key={href}
              href={href}
              className={`block text-lg text-gray-300 hover:text-${color} font-medium transition duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
