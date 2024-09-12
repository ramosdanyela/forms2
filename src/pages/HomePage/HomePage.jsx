import styles from "./HomePage.module.css";
import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import SearchForm from "../../components/SearchForm/SearchForm";

function HomePage() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(null);

  return (
    <div className={styles.homePageContainer}>
        <SearchForm
          search={search}
          setSearch={setSearch}
          year={year}
          setYear={setYear}
        />
        <Cards search={search} year={year} />{" "}
      </div>
  );
}

export default HomePage;
