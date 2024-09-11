import "./Cards.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cards({ cars, search, year }) {
  

  return (
    <div>
    {cars.filter((car) =>
        car.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((car) =>
        year ? car.start_production === parseInt(year) : true
      )
      .length > 0 ? (
      cars
        .filter((car) =>
          car.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((car) =>
          year ? car.start_production === parseInt(year) : true
        )
        .map((car) => (
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
