import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Reserve from "./components/Reserve/Reserve"
import About from "./components/About/About"
import "./App.css"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
