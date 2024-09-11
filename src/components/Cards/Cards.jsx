import "./Cards.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cards({ cars, searchText, selectedYear }) {
  const filteredCars = cars
    .filter((car) => car.title.toLowerCase().includes(searchText.toLowerCase()))
    .filter((car) =>
      selectedYear ? car.year === parseInt(selectedYear) : true
    );

  return (
    <div className="cardsContainerMaster">
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <Link to={`/car/${car.id}`} className="custom-link" key={car.id}>
            <div className="cardContainerUnit">
              <img className="HPImage" src={car.image} alt={car.title} />
              <p className="HPTitle">{car.title}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No cars found</p>
      )}
    </div>
  );
}

export default Cards;
