import { DBConnection } from '@/app/utils/config/db'
import BlogModel from '@/app/utils/models/Blog';
import React from 'react'

const DisplayBlog = async () => {
  await DBConnection();
  const allBlogs = await BlogModel.find({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-6 text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-14 
                     text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                     drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-pulse">
        Midnight Glow Blogs ✨
      </h1>

      {/* Blogs Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {allBlogs.map((blog, i) => (
          <div
            key={i}
            className="relative group p-6 rounded-2xl 
                       bg-gray-900/60 backdrop-blur-md border border-cyan-500/20 
                       shadow-[0_0_15px_rgba(0,255,255,0.15)] 
                       transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          >
            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-lg 
                            transition duration-700 -z-10"></div>

            {/* Blog Content */}
            <h3 className="font-bold text-2xl mb-3 text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
              {blog.title}
            </h3>
            <h4 className="text-purple-400 font-semibold mb-4 drop-shadow-[0_0_6px_rgba(200,100,255,0.7)]">
              ✍️ {blog.name}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayBlog
