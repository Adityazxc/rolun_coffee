import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

import Bio from "../pages/Bio/Bio";
import useScrollToSection from "../hooks/useScrollToSection";

function ScrollHandler() {
  useScrollToSection();
  return null;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollHandler />

      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}