import Cards from "../components/Cards/Cards";
import SearchForm from "../components/SearchForm/SearchForm";
import styles from "./HomePage.module.css";
import { useState } from "react";

function HomePage({ cars, setCars }) {
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div>
      <div className={styles.searchFormContainer}>
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          cars={cars}
        />
      </div>
      <div className={styles.homepageCards}>
        <Cards
          cars={cars}
          searchText={searchText}
          selectedYear={selectedYear}
        />{" "}
      </div>
    </div>
  );
}

export default HomePage;
