import React from "react"
import Image from "next/image"

const AboutPage = () => {
  const team = [
    {
      name: "Chaitanya",
      role: "MERN Stack Developer",
      img: "https://i.pinimg.com/736x/61/00/0d/61000d36fa8d8dd122a9982ec6b17925.jpg",
    },
    {
      name: "Aleena",
      role: "Next.js Developer",
      img: "https://cdn.cosmos.so/3dba2162-3fbc-4005-a1a5-f9953189b725?format=jpeg",
    },
    {
      name: "Monica",
      role: "HR Recruiter",
      img: "https://cdn.cosmos.so/27853c06-912c-415e-a9f2-a539e7cc2c1a?format=jpeg",
    },
    {
      name: "Simran",
      role: "Data Analyst",
      img: "https://cdn.cosmos.so/b6e639ad-3b36-4d90-a214-e81f51cb111b?format=jpeg",
    },
    {
      name: "Larissa",
      role: "Node.js Developer",
      img: "https://cdn.cosmos.so/59a49adb-85ab-4fb3-b130-a6eeabd54e35?format=jpeg",
    },
    {
      name: "Enya",
      role: "Backend Developer",
      img: "https://cdn.cosmos.so/3417f3c7-6fdd-451b-9de9-90a53412fed4?format=jpeg",
    },
  ]

  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          About <span className="text-indigo-500">BlogSpace</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mb-8 text-lg">
          BlogSpace is your creative hub to share stories, explore insights, and connect with a vibrant community of writers and readers.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
            🚀 Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to empower creators, storytellers, and learners by providing a platform that fosters creativity, collaboration, and growth. 
            Whether you are writing your first blog or sharing deep technical insights, BlogSpace is built for you.
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg shadow-cyan-400/30 p-8 hover:shadow-cyan-400/50 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-3 text-cyan-300">✨ Why BlogSpace?</h3>
          <ul className="space-y-2 text-gray-300">
            <li>✔ Easy-to-use blogging tools</li>
            <li>✔ Midnight Glow themed UI</li>
            <li>✔ A growing creative community</li>
            <li>✔ Secure and fast performance</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900/60 backdrop-blur-md py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
          👩‍💻 Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition transform hover:-translate-y-2 text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden mb-4 border-2 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6 text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">
          Ready to Share Your Story?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join BlogSpace today and start creating content that inspires, educates, and entertains.
        </p>
        <a
          href="/blogs"
          className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-black font-semibold rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition text-lg"
        >
          Start Blogging 🚀
        </a>
      </section>
    </main>
  )
}

export default AboutPage