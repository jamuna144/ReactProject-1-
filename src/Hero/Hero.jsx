import library from "../assets/library.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const genres = [
    { slug: "novels", label: "Novels" },
    { slug: "science-and-research", label: "Science" },
    { slug: "arts-and-literature", label: "Arts & Literature" },
    { slug: "technology-and-innovation", label: "Technology" },
  ];

  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="relative w-full h-150">
        <img
          src={library}
          alt="library"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Find Your Next Favorite Book
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-lg max-w-xl">
            Discover thousands of books across different genres and start your
            reading journey today.
          </p>

          {/* SEARCH BOX */}
          <div className="mt-8 w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-3">
            {/* SEARCH INPUT */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/search?q=${query}`);
                }
              }}
              placeholder="Search books by title, author, or genre..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none"
            />

            {/* DATE INPUT */}
            <input
              type="date"
              className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* SEARCH BUTTON */}
            <button
              onClick={() => navigate(`/search?q=${query}`)}
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Search
            </button>
          </div>

          {/* GENRE BUTTONS */}
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            {genres.map((g) => (
              <button
                key={g.slug}
                onClick={() => navigate(`/explore/${g.slug}`)}
                className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-black transition"
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <h2 className="text-red-500 text-3xl font-bold underline">
              Wide Book Collection
            </h2>
            <p className="text-black font-bold mt-3">
              Explore thousands of books across fiction, science, history, and
              more.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <h2 className="text-red-500 text-3xl font-bold underline">
              Easy Borrow System
            </h2>
            <p className="text-black font-bold mt-3">
              Borrow and return books easily with a simple and fast system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <h2 className="text-red-500 text-3xl font-bold underline">
              Smart Tracking
            </h2>
            <p className="text-black font-bold mt-3">
              Track issued books, due dates, and manage users efficiently.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
