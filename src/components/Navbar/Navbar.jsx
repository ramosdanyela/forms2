import { useState } from "react";
import styles from "./Navbar.module.css";
import carIcon from "/Users/danyelaramos/Documents/development/react/forms2/src/assets/carIcon.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Navbar({ cars }) {
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
          <img className={styles.icon} src={carIcon} />
          <h1 className={styles.sitetitle}>Car list</h1>{" "}
        </div>{" "}
        <div className={styles.newAndRandomContainer}>
          <Link to="/addcar" className={styles.customlink}>
            Add new car
          </Link>
          <div className={styles.randomContainer}>
            {" "}
            <Link to="/random/car/:id_car" className={styles.customlink}>
              Get Random Car
            </Link>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
