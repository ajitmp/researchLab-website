import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import Activities from "./pages/Activities";
import Recruitment from "./pages/Recruitment";
import "./App.css"; // Import the global CSS

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/research" element={<Research />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
