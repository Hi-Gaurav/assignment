import React from "react";
import Navbar from "./Components/common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subjects from "./pages/Subjects";
import "./App.css";
import Bm from "./pages/Bm";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Subjects />} />
            <Route path="/business-development" element={<Bm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
