import styles from "./NewCarPage.module.css";
import { useState } from "react";

function NewCarPage({ cars, setCars }) {
  const [form, setForm] = useState({
    image: "",
    title: "",
    start_production: "",
    class: "",
    id: "",
  });

  function handleAddChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleAddClick(event) {
    event.preventDefault();

    // Cria um novo carro com um ID único (por exemplo, baseado no tamanho da array + 1)
    const newCar = {
      ...form,
      id: cars.length > 0 ? cars[cars.length - 1].id + 1 : 1, // Garante que o ID seja único
    };

    // Adiciona o novo carro ao array existente de cars
    setCars([...cars, newCar]);

    // Limpa o formulário após o envio
    setForm({
      image: "",
      title: "",
      start_production: "",
      class: "",
      id: "",
    });

    console.log(newCar);
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
            type="text"
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
