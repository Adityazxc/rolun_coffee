import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Facility from "../pages/Facility/Facility";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </BrowserRouter>
  );
}