import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoupDeC from "./pages/CoupDeC";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CDC" element={<CoupDeC />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
