import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditVisible, setIsEditVisible] = useState(false);
  const toggleEditButton = () => {
    setIsEditVisible(!isEditVisible);
  };

  const [car, setCar] = useState({});
  const [form, setForm] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://basic-server-express-production.up.railway.app/cars/${id}`
        );
        let car = response.data;
        setCar(car);
        setForm({
          title: car.title,
          start_production: car.start_production,
          class: car.class,
          _id: car._id,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  function handleChange(event) {
    {
      setForm({ ...form, [event.target.name]: event.target.value });
    }
  }

  console.log(car);

  async function handleSaveClick(event) {
    event.preventDefault();
    try {
      const response = await axios.put(
        `https://basic-server-express-production.up.railway.app/cars/update/${id}`,
        { ...form }
      );
      setIsEditVisible(false);
      setCar(response.data);
    } catch (error) {
      console.error("Error updating car", error);
    }
  }

  async function handleDeleteClick(event) {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `https://basic-server-express-production.up.railway.app/cars/delete/${id}`
      );
      navigate("/");
    } catch (error) {
      console.error("Error deleting car", error);
    }
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
            {car._id}{" "}
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
