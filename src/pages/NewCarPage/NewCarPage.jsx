import styles from "./NewCarPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function NewCarPage({}) {
  const [form, setForm] = useState({
    image: "",
    title: "",
    start_production: "",
    class: "",
  });

  function handleAddChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleAddClick(event) {
    event.preventDefault();

    const newCar = {
      ...form,
    };

    try {
      const response = await axios.post(
        `https://basic-server-express-production.up.railway.app/cars/create`,
        newCar
      );
      console.log("Car created:", response.data);

      setForm({
        image: "",
        title: "",
        start_production: "",
        class: "",
      });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  return (
    <div className={styles.editFieldContainer}>
      <form className={styles.editForm}>
        <div className={styles.title}>
          <b>Add new car</b>
        </div>
        <div className={styles.editImage}>
          <label>Image Link</label>
          <input
            className={styles.inputImage}
            type="text"
            placeholder="Car image link"
            name="image"
            value={form.image}
            onChange={handleAddChange}
          />
        </div>
        <div className={styles.editNameContainer}>
          <label>Name</label>
          <input
            className={styles.inputName}
            type="text"
            placeholder="Car name"
            name="title"
            value={form.title}
            onChange={handleAddChange}
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
            onChange={handleAddChange}
          />{" "}
        </div>
        <div className={styles.editYearContainer}>
          <label>Year</label>
          <input
            className={styles.inputYear}
            type="number"
            placeholder="Year"
            name="start_production"
            value={form.start_production}
            onChange={handleAddChange}
          />
        </div>

        <div className={styles.saveDeleteContainer}>
          {" "}
          <button className={styles.saveButton} onClick={handleAddClick}>
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCarPage;
