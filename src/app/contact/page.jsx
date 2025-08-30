"use client"
import React, { useState } from "react";
import { ContactDetailsServer } from "../RegestationServer/ContactServer";
import { redirect } from "next/navigation";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const formContactDetails = async (e)=> {
    e.preventDefault();
    const contacts = {name, email, subject, message}
    await ContactDetailsServer(contacts)
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    redirect('/');
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                       drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
          Contact Us
        </h1>
        <p className="text-gray-400">We whould love to hear from you 💌</p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-gray-900/70 p-8 rounded-2xl 
                        border border-cyan-400/20 backdrop-blur-md 
                        shadow-[0_0_25px_rgba(0,255,255,0.3)]">
          <h2 className="text-3xl font-bold mb-6 
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 to-cyan-400 
                         drop-shadow-[0_0_10px_rgba(200,200,255,0.6)]">
            Get In Touch
          </h2>

          <form action="mailto:mulagani.chaitanya@gmail.com" method="POST" encType="text/plain" className="space-y-5" onSubmit={formContactDetails}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl 
                         bg-gray-800/70 border border-cyan-400/30 
                         focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 
                         outline-none text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl 
                         bg-gray-800/70 border border-purple-400/30 
                         focus:border-purple-400 focus:ring-2 focus:ring-purple-500 
                         outline-none text-white placeholder-gray-400"
            />
            <input
              type="text"
              name="subject"
              onChange={(e)=> setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl 
                         bg-gray-800/70 border border-pink-400/30 
                         focus:border-pink-400 focus:ring-2 focus:ring-pink-500 
                         outline-none text-white placeholder-gray-400"
            />
            <textarea
              rows={5}
              name="message"
              onChange={(e)=> setMessage(e.target.value)}
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 rounded-xl 
                         bg-gray-800/70 border border-cyan-400/30 
                         focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 
                         outline-none text-white placeholder-gray-400 resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-lg text-black 
                         bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                         hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 
                         shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              Send Now 🚀
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-gray-900/70 border border-purple-400/20 
                          shadow-[0_0_20px_rgba(200,100,255,0.25)]">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Phone Number</h3>
            <p className="text-gray-300">+91 8019716330</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/70 border border-pink-400/20 
                          shadow-[0_0_20px_rgba(255,100,200,0.25)]">
            <h3 className="text-xl font-bold text-pink-400 mb-2">Email Address</h3>
            <p className="text-gray-300">mulagani.chaitanya@gmail.com</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/70 border border-cyan-400/20 
                          shadow-[0_0_20px_rgba(0,255,255,0.25)]">
            <h3 className="text-xl font-bold text-purple-400 mb-2">WhatsApp</h3>
            <p className="text-gray-300">+91 8019716330</p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/70 border border-cyan-400/20 
                          shadow-[0_0_20px_rgba(0,255,255,0.25)]">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Our Office</h3>
            <p className="text-gray-300">Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.988057119291!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e3bc!2sBangalore!5e0!3m2!1sen!2sin!4v1672239489645"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;