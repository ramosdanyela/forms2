import styles from "./Cards.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Cards({ search, year }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://basic-server-express-production.up.railway.app/cars/all"
        );
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Loading..</p>}
      {!loading && cars.length === 0 && <p>No cars found</p>}
      {!loading && cars.length > 0 && (
        <div className={styles.cardsContainer}>
          {cars
            .filter((car) =>
              car.title.toLowerCase().includes(search.toLowerCase())
            )
            .filter((car) =>
              year ? car.start_production === parseInt(year) : true
            )
            .map((car) => (
              <Link to={`/car/${car._id}`} className={styles.customlink} key={car._id}>
                <div className={styles.cardContainerUnit}>
                  <img className={styles.HPImage} src={car.image} alt={car.title} />
                  <p className={styles.HPTitle}>{car.title}</p>
                  <button className={styles.seeDetails}>Ver mais</button>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
}

export default Cards;
