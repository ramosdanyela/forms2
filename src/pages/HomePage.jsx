import styles from "./HomePage.module.css";
import { useState } from "react";
import Cards from "../components/Cards/Cards";
import SearchForm from "../components/SearchForm/SearchForm";

function HomePage({ cars, setCars }) {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(null);

  return (
    <div className="homePageContainer">
      <div className={styles.searchFormContainer}>
        <SearchForm
          search={search}
          setSearch={setSearch}
          year={year}
          setYear={setYear}
          cars={cars}
        />
      </div>
      <div className={styles.homepageCards}>
        <Cards cars={cars} search={search} year={year} />{" "}
      </div>
    </div>
  );
}

export default HomePage;
