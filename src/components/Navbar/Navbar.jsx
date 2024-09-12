import styles from "./Navbar.module.css";
import icon from "../../../public/icon.svg";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.headlineContainer}>
        <div className="homeButton">
          <Link to="/" className={styles.customlink}>
            Home
          </Link>
        </div>
        <div className={styles.carimage}>
          {" "}
          <img className={styles.icon} src={icon} />
          <h1 className={styles.sitetitle}>Car list</h1>{" "}
        </div>{" "}
        <div className={styles.newAndRandomContainer}>
          <Link to="/addcar" className={styles.customlink}>
            Add new car
          </Link>
          <div className={styles.randomContainer}>
            {" "}
            <Link to="/random/car/:id" className={styles.customlink}>
              Get Random Car
            </Link>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
