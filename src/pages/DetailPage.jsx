import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { useState } from "react";

function DetailPage({ cars, setCars }) {
  const { id_car } = useParams();
  const navigate = useNavigate();
  const [isEditVisible, setIsEditVisible] = useState(false);

  const toggleEditButton = () => {
    setIsEditVisible(!isEditVisible);
  };

  const selectedCar = cars.find((car, index) => {
    return car.id === Number(id_car);
  });

  const [form, setForm] = useState({
    title: selectedCar.title,
    start_production: selectedCar.start_production,
    class: selectedCar.class,
    id: selectedCar.id,
  });

  function handleChange(event) {
    {
      setForm({ ...form, [event.target.name]: event.target.value });
    }
  }

  function handleSaveClick(event) {
    event.preventDefault();
    const updatedCars = cars.map((car) =>
      car.id === Number(id_car)
        ? { ...car, ...form } // Substitui o carro com os novos dados do formulário
        : car
    );

    // Atualiza o estado global de carros
    setCars(updatedCars);
  }

  function handleDeleteClick(event) {
    event.preventDefault();
    const updatedCars = cars.filter((car) => car.id !== Number(id_car));
    setCars(updatedCars);
    navigate("/");
  }

  console.log(cars);

  return (
    <div className={styles.dpContainer}>
      <div className={styles.dpTitleContainer}>
        <div className={styles.dpTitle}> {selectedCar.title} </div>
      </div>
      <div className={styles.dpContainerUnit}>
        <div className={styles.dpImageContainer}>
          <img src={selectedCar.image} />
        </div>
        <div className={styles.dpDescription}>
          {" "}
          <div className={styles.containerYear}>
            {" "}
            <b>Year:</b>
            {selectedCar.start_production}{" "}
          </div>
          <div className={styles.containerClass}>
            <b>Class:</b>
            {selectedCar.class}{" "}
          </div>
          <div className={styles.containerId}>
            <b>Id:</b>
            {selectedCar.id}{" "}
          </div>
        </div>
      </div>
      <div className={styles.editButtonContainer}>
        {" "}
        <button className={styles.editButton} onClick={toggleEditButton}>
          {" "}
          Edit Car{" "}
        </button>
      </div>
      {isEditVisible && (
        <div className={styles.editFieldContainer}>
          <form className={styles.editForm}>
            <div className={styles.editNameContainer}>
              <label>Name</label>
              <input
                className={styles.inputName}
                type="text"
                placeholder="Car name"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className={styles.editYearContainer}>
              <label>Year</label>
              <input
                className={styles.inputYear}
                type="text"
                placeholder="Year"
                name="start_production"
                value={form.start_production}
                onChange={handleChange}
              />
            </div>
            <div className={styles.editClassContainer}>
              <label>Class</label>
              <input
                className={styles.inputClass}
                type="text"
                placeholder="Class"
                name="class"
                value={form.class}
                onChange={handleChange}
              />{" "}
            </div>
            <div className={styles.saveDeleteContainer}>
              {" "}
              <button
                className={styles.deleteButton}
                onClick={handleDeleteClick}
              >
                Delete Car
              </button>
              <button className={styles.saveButton} onClick={handleSaveClick}>
                Save changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
