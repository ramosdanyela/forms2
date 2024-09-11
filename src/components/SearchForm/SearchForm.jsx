import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ search, setSearch, year, setYear, cars }) {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const uniqueYears = Array.from(
    new Set(cars.map((car) => car.start_production))
  ).sort((a, b) => b - a);

  return (
    <form className="search-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={year}
          onChange={handleYearChange}
          className="year-select"
        >
          <option value="">Select Year</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default SearchForm;
