import { useParams, useNavigate } from "react-router-dom";
import styles from "./RandomPage.module.css";
import { useState, useEffect } from "react";

function RandomPage({ cars, setCars }) {
  const { id_car } = useParams();
  const navigate = useNavigate();

  const listIds = cars.map((car) => car.id);
  const randomIndex = Math.floor(Math.random() * cars.length);
  const car = cars[randomIndex];

  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: car.title,
    start_production: car.start_production,
    class: car.class,
    image: car.image,
    id: car.id,
  });

  function handleShowForm() {
    setShowForm(!showForm);
  }

  function handleChangeForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const index = cars.findIndex((car) => car.id === Number(id_car));
    const newCars = [...cars];
    newCars[index] = form;
    setCars(newCars);
    setShowForm(false);
  }

  function handleDelete() {
    const index = cars.findIndex((car) => car.id === Number(id_car));
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
    navigate("/");
  }

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
            {car.id}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPage;
