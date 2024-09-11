import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import NewCarPage from "./pages/NewCarPage.jsx";
import carsData from "./data/carswithid.json";
import Navbar from "./components/Navbar/Navbar.jsx";
import RandomPage from "/Users/danyelaramos/Documents/development/react/forms2/src/pages/RandomPage.jsx"

function App() {
  const [cars, setCars] = useState(carsData);

  return (
    <div className="mainSite">
      <Navbar cars={cars}/>

      <Routes>
      <Route path="/random/car/:id_car" element={<RandomPage cars={cars} setCars={setCars}
        />}/>
        <Route path="/" element={<HomePage cars={cars} setCars={setCars} />} />
        <Route
          path="/car/:id_car"
          //o ":"identifica que é um parametro
          element={<DetailPage cars={cars} setCars={setCars} />}
        />
        <Route
          path="/addcar"
          element={<NewCarPage cars={cars} setCars={setCars} />} />

         
      </Routes>
    </div>
  );
}

export default App;
