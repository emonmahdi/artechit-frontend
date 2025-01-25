import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./shared/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Navbar from "./shared/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
