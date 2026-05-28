

import Novels from "../assets/Novels.webp";
import Science from "../assets/Science.jpg";
import Technology from "../assets/Technology.jpg";
import Academic from "../assets/Academic.jpg";
import Biography from "../assets/Biography.jpg";
import Business from "../assets/Business,Economics.jpg";
import Arts from "../assets/Arts & Literature.jpg";
import History from "../assets/History.jpg";

import { useNavigate } from "react-router-dom";

export default function Books() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f0ebe0] text-[#2a2622] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-[#493a2a]">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0ebe0] mb-4">
            Explore Our Library Collection
          </h1>

          <p className="text-[#d8d0bc] text-lg md:text-xl">
            Discover thousands of books across fiction, science, history, technology, and more.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-7 py-3 Accent: #9b9b9b text-black font-medium rounded-full hover:scale-105 transition"
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* SECTIONS */}
      {/* <Section
        img={Novels}
        title="Fiction & Novels"
        text="A rich collection of novels and fictional stories that inspire imagination and creativity."
        reverse={false}
        navigate={navigate}
      /> */}

      <Section
        img={Novels}
        title="Fiction & Novels"
        category="novels"
        text="A rich collection..."
        reverse={false}
        navigate={navigate}
      />

      <Section
        img={History}
        title="History Collection"
        text="Explore historical books that reveal ancient civilizations and world events."
        reverse={true}
        navigate={navigate}
      />

      <Section
        img={Arts}
        title="Arts & Literature"
        text="Discover poetry, literature, and artistic works that reflect creativity and culture."
        reverse={false}
        navigate={navigate}
      />

      <Section
        img={Biography}
        title="Biographies"
        text="Learn from the life stories of great personalities and their achievements."
        reverse={true}
        navigate={navigate}
      />

      <Section
        img={Science}
        title="Science & Research"
        text="Expand your knowledge of physics, chemistry, biology, and discoveries."
        reverse={false}
        navigate={navigate}
      />

      <Section
        img={Technology}
        title="Technology & Innovation"
        text="Stay updated with programming, AI, cybersecurity, and innovations."
        reverse={true}
        navigate={navigate}
      />

      <Section
        img={Academic}
        title="Academic Resources"
        text="Support your studies with textbooks and learning materials."
        reverse={false}
        navigate={navigate}
      />

      <Section
        img={Business}
        title="Business & Economics"
        text="Learn business, finance, entrepreneurship, and economic principles."
        reverse={true}
        navigate={navigate}
      />

    </div>
  );
}

function Section({ img, title, text, reverse, navigate, category }) {
  return (
    <section
      className={`max-w-6xl mx-auto my-16 px-6 flex flex-col md:flex-row items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="w-full md:w-[320px] h-[320px] object-cover rounded-xl shadow-lg"
      />

      {/* TEXT */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <p className="text-gray-600 text-base md:text-sm leading-relaxed font-medium">
          {text}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate(`/explore/${category}`)}
          className="mt-5 px-6 py-2 bg-[#c4a85c] text-black font-medium rounded-full hover:scale-105 transition"
        >
          Explore Books
        </button>
      </div>
    </section>

    
  );
}

// /* REUSABLE SECTION COMPONENT */
// function Section({ img, title, text, reverse, navigate, category }) {
//   return (
//     <section
//       className={`max-w-6xl mx-auto my-16 px-6 flex flex-col md:flex-row items-center gap-10 ${reverse ? "md:flex-row-reverse" : ""
//         }`}
//     >
//       {/* IMAGE */}
//       <img
//         src={img}
//         alt={title}
//         className="w-full md:w-[320px] h-[320px] object-cover rounded-xl shadow-lg"
//       />

//       {/* TEXT */}
//       <div className="md:w-1/2">
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>

//         <p className="text-gray-600 text-base md:text-sm leading-relaxed font-medium">
//           {text}
//         </p>

//        function Section({ img, title, text, reverse, navigate, category }) {
//       </div>
//     </section>
//   );
// }