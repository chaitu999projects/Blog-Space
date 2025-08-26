
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { auth } from "../../auth"
import { redirect } from "next/navigation"

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
          href="/blog"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg shadow-indigo-500/40 transition text-lg"
        >
         Explore Blogs
        </Link>
      </section>

      {/* 2. Featured Post */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">✨ Featured Post</h2>
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition transform hover:-translate-y-2">
          <Image
            src="https://cdn.cosmos.so/68ad5a08-2e9f-4575-9c36-3c0d6774f57c?format=jpeg"
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

      {/* 3. Recent Posts */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">📰 Recent Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Post Card */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition transform hover:-translate-y-2">
            <Image
              src="https://cdn.cosmos.so/5ba4c12d-0bf2-4758-933c-4a447b6c0731?format=jpeg"
              alt="Post"
              className="w-full h-48 object-cover"
              width={400}
              height={250}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Migrating to Linear 101</h3>
              <p className="text-gray-400 text-sm">
                Learn tips & tricks for seamless project migration.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition transform hover:-translate-y-2">
            <Image
              src="https://cdn.cosmos.so/f09f9db4-111e-4546-881b-073f4ba536c8?format=jpeg"
              alt="Post"
              className="w-full h-48 object-cover"
              width={400}
              height={250}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Building Your API Stack</h3>
              <p className="text-gray-400 text-sm">
                Step-by-step guide to creating scalable APIs.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition transform hover:-translate-y-2">
            <Image
              src="https://cdn.cosmos.so/b1eee3bb-fb01-46dd-b718-f6b33293dc0e?format=jpeg"
              alt="Post"
              className="w-full h-48 object-cover"
              width={400}
              height={250}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Wireframing 101</h3>
              <p className="text-gray-400 text-sm">
                Learn how wireframes speed up your design process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
