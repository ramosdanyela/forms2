import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import NewCarPage from "./pages/NewCarPage/NewCarPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import RandomPage from "./pages/RandomPage/RandomPage.jsx";

function App() {
  const [cars, setCars] = useState([]);

  return (
    <div className="mainScreen">
      <Navbar />
      <Routes>
        <Route path="/random/car/:id" element={<RandomPage />} />
        <Route path="/" element={<HomePage cars={cars} setCars={setCars} />} />
        <Route
          path="/car/:id"
          //o ":"identifica que é um parametro
          element={<DetailPage />}
        />
        <Route path="/addcar" element={<NewCarPage />} />
      </Routes>
    </div>
  );
}

export default App;
