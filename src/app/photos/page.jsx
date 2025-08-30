"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = "sj4s3hlLSU2lW_nzzwls_2B5rDHVdQRaEqqoIHCH_Y0";

  const searchImages = async (reset = false) => {
    if (!keyword.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=${
          reset ? 1 : page
        }&query=${keyword}&client_id=${accessKey}&per_page=12`
      );
      const data = await res.json();

      if (reset) {
        setImages(data.results || []);
        setPage(2);
      } else {
        setImages((prev) => [...prev, ...(data.results || [])]);
        setPage((prev) => prev + 1);
      }

      if (!data.results || data.results.length === 0) {
        setError("No images found. Try a different search term.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchImages(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 py-12 pt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg animate-pulse">
        ✨ Search Your Favorites
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mb-10 gap-4 max-w-2xl mx-auto"
      >
        <input
          type="text"
          placeholder="Search breathtaking images..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl bg-gray-800/80 border border-indigo-500/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition font-semibold shadow-[0_0_15px_rgba(99,102,241,0.8)]"
        >
          Search
        </button>
      </form>

      {/* Error */}
      {error && (
        <p className="text-center text-red-400 mb-6 text-lg animate-pulse">
          {error}
        </p>
      )}

      {/* Image Results */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {images.map((img) => (
          <a
            key={img.id}
            href={img.links.html}
            target="_blank"
            rel="noopener noreferrer"
            title={img.alt_description || "Unsplash image"}
            className="group relative rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300"
          >
            <Image
              src={img.urls.regular}
              alt={img.alt_description || "Unsplash image"}
              width={500}
              height={500}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-2 right-2 text-xs bg-black/70 px-2 py-1 rounded-md text-indigo-300 shadow-lg">
              {img.user.name}
            </span>
          </a>
        ))}
      </div>

      {/* Load More */}
      {images.length > 0 && !loading && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => searchImages(false)}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 font-semibold shadow-[0_0_15px_rgba(99,102,241,0.8)] transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <p className="text-center mt-8 text-indigo-400 animate-pulse text-lg">
          Loading magical images...
        </p>
      )}
    </div>
  );
}
