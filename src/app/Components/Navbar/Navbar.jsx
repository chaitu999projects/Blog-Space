"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          <Link href="/">BlogSpace</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-cyan-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]">Home</Link>
          <Link href="/createblog/getblog" className="text-gray-300 hover:text-pink-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]">Blogs</Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(128,0,255,0.8)]">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-green-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(0,255,128,0.8)]">Contact</Link>
          <Link href="/api/auth/signout" className="text-gray-400 hover:text-red-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(255,50,50,0.8)]">Logout</Link>
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
        <nav className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black px-6 pb-4 space-y-3 flex flex-col items-start shadow-lg border-t border-gray-700">
          <Link href="/" className="block text-gray-300 hover:text-cyan-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]">Home</Link>
          <Link href="/createblog/getblog" className="block text-gray-300 hover:text-pink-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(255,0,255,0.8)]">Blog</Link>
          <Link href="/about" className="block text-gray-300 hover:text-purple-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(128,0,255,0.8)]">About</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-green-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(0,255,128,0.8)]">Contact</Link>
          <Link href="/api/auth/signout" className="block text-gray-400 hover:text-red-400 font-medium transition hover:drop-shadow-[0_0_6px_rgba(255,50,50,0.8)]">Logout</Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
