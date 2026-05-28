import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Nobel from "./pages/Nobel";
import BookDetails from "./Pages/BookDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Hero from "./Hero/Hero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>      
        <Route
          index
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />
        <Route path="/" element={Home}/>
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="books" element={<Books />} />
        <Route path="explore/:category" element={<Explore />} />
        <Route path="novels" element={<Nobel />} />
        <Route path="book/:id" element={<BookDetails />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;




// import { Routes, Route, useLocation } from "react-router-dom";
// import "./App.css";

// import Navbar from "./Navbar/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Books from "./pages/Books";
// import Dashboard from "./pages/Dashboard";
// import Hero from "./Hero/Hero";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import Explore from "./pages/Explore";
// import Nobel from "./pages/Nobel";
// import BookDetails from "./Pages/BookDetails";
// import Footer from "./Footer/Footer";


// function App() {
//   return <AppContent />;
// }

// function AppContent() {
//   const location = useLocation();
//   const hideNavbarPaths = ["/login", "/register", "/forgot-password"];
//   const showNavbar = !hideNavbarPaths.includes(location.pathname);

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Home />
//             </>
//           }
//         />

//         <Route path="/about" element={<About />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/books" element={<Books />} />
//         <Route path="/explore/:category" element={<Explore />} />
//         <Route path="/novels" element={<Nobel />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/book/:id" element={<BookDetails />} />
//       </Routes>

//       <Footer/>
//     </>
//   );
// }

// export default App;
