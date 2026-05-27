

import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Dashboard from "./pages/Dashboard";
import Hero from "./Hero/Hero";
import Explore from "./Pages/Explore";
import Novels from "./Pages/Nobel";




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/explore/:category" element={<Explore />} />
      <Route path="/novels" element={<Novels />} />

      </Routes>
    </>
  );
}

export default App;