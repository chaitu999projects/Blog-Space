
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { auth } from "../../auth"
import { redirect } from "next/navigation"
import DisplayBlog from "./createblog/getblog/page"

const HomePage = async() => {
  const session = await auth();
  if(!session) {
    redirect("/login")
  }
  
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* 1. Welcome Section */}

      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          Welcome to <span className="text-indigo-500">BlogSpace</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mb-8 text-lg">
          Discover insights, stories, and guides with a touch of creativity.
        </p>
        <Link
          href="/blogs"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg shadow-indigo-500/40 transition text-lg"
        >
         Create Blog
        </Link>
      </section>

      {/* 2. Featured Post */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">✨ Featured Post</h2>
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition transform hover:-translate-y-2">
          <Image
            src="https://cdn.cosmos.so/0dbcecad-7db1-4656-99d8-886cd8421e51?format=jpeg"
            alt="Featured"
            className="w-full h-72 object-cover"
            width={1200}
            height={500}
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Breaking Into Product Design
            </h3>
            <p className="text-gray-400">
              Learn how Frankie transitioned into design and built a successful career.
            </p>
          </div>
        </div>
      </section>

      {/*3. Recent Posts */}
      <DisplayBlog />
    </main>
  )
}

export default HomePage
