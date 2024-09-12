import { useParams, useNavigate } from "react-router-dom";
import styles from "./RandomPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState({});

  useEffect(() => {
    let timeoutId;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://basic-server-express-production.up.railway.app/cars/random`
        );
        setCar(response.data);

        timeoutId = setTimeout(fetchData, 5000);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.dpContainer}>
      <div className={styles.dpTitleContainer}>
        <div className={styles.dpTitle}> {car.title} </div>
      </div>
      <div className={styles.dpContainerUnit}>
        <div className={styles.dpImageContainer}>
          <img src={car.image} />
        </div>
        <div className={styles.dpDescription}>
          {" "}
          <div className={styles.containerYear}>
            {" "}
            <b>Year:</b>
            {car.start_production}{" "}
          </div>
          <div className={styles.containerClass}>
            <b>Class:</b>
            {car.class}{" "}
          </div>
          <div className={styles.containerId}>
            <b>Id:</b>
            {car._id}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPage;
