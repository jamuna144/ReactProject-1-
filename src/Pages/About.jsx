import React from "react";

export default function About() {
  return (
<div className="min-h-screen bg-gradient-to-b from-[#e8dccb] via-[#d2b89a] to-[#b08968] px-6 py-12">

      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-800 animate-bounce">
           About Our Library
        </h1>
        <p className="text-xl text-black mt-4 animate-pulse">
          A modern digital space for readers & learners
        </p>
      </div>


      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-white p-10 rounded-[40px] shadow-xl border-l-8 border-green-500 transform hover:scale-105 transition duration-500">
          <h2 className="text-3xl font-bold mb-4 text-green-600 animate-fadeIn">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fadeInSlow">
            We aim to build a powerful digital library where students, readers,
            and researchers can access books anytime. Our goal is to make
            learning simple, fast, and enjoyable for everyone.
          </p>
        </div>
      </div>


      <div className="max-w-5xl mx-auto mb-10">
       <div className="bg-[#a67c52] text-white p-10 rounded-tr-[80px] rounded-bl-[80px] shadow-xl hover:rotate-1 transition duration-500">
          <h2 className="text-3xl font-bold mb-4 animate-pulse">
            🌍 Our Vision
          </h2>
          <p className="text-lg leading-relaxed">
            To create a world where every book is just one click away.
            We believe knowledge should be accessible, organized, and free
            for every learner across the globe.
          </p>
        </div>
      </div>


      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-white p-10 rounded-[30px] shadow-xl border-t-8 border-purple-500">
          <h2 className="text-3xl font-bold mb-6 text-purple-600 bold animate-bounce">
            Features
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="animate-fadeIn"> Huge collection of books</li>
            <li className="animate-fadeIn">Smart search system</li>
            <li className="animate-fadeIn"> Fully responsive design</li>
            <li className="animate-fadeIn"> Fast and lightweight UI</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-black text-lg bold animate-pulse">
        Built with ❤️ for readers and knowledge seekers
      </div>
    </div>
  );
}