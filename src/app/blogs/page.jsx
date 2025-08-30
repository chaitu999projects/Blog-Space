// app/createblog/page.jsx
import { DBConnection } from '@/app/utils/config/db'
import BlogModel from '@/app/utils/models/Blog'
import { redirect } from 'next/navigation'
import React from 'react'
import SubmitButton from '../Components/SubmitButton/SubmitButton'

export default function CreateBlog() {
  // ✅ Server Action
  const formHandleData = async (formData) => {
    "use server"
    await DBConnection();
    console.log("Server Activated");

    const name = formData.get('name');
    const title = formData.get('title');
    const description = formData.get('description');

    await BlogModel.create({ name, title, description });

    redirect('/createblog/getblog')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.3)] bg-gray-900/70 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
          Create Blog
        </h1>
        <form action={formHandleData} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Good Name?"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-cyan-500/40 focus:border-cyan-400 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          />
          <input
            type="text"
            name="title"
            placeholder="Topic Title"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-purple-500/40 focus:border-purple-400 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 shadow-[0_0_10px_rgba(200,100,255,0.3)]"
          />
          <textarea
            name="description"
            placeholder="Write Sweet Words"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-pink-500/40 focus:border-pink-400 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 shadow-[0_0_10px_rgba(255,100,200,0.3)] resize-none"
          />

          {/* ✅ Button with loading state */}
          <SubmitButton />
        </form>
      </div>
    </div>
  )
}

