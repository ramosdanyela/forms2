import React, { useState, useEffect } from "react";
import styles from "./SearchForm.module.css";
import axios from "axios";

function SearchForm({ search, setSearch, year, setYear }) {
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const uniqueYears = Array.from(
    new Set(cars.length > 0 ? cars.map((car) => car.start_production) : [])
  ).sort((a, b) => b - a);

  return (
    <form className={styles.searchform}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
        className={styles.searchinput}
      />
      <select
        value={year}
        onChange={handleYearChange}
        className={styles.yearselect}
      >
        <option key="" value="">
          Select Year
        </option>
        {uniqueYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchForm;
