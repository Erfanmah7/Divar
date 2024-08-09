import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" alt="location" />
          <p>اردکان</p>
        </span>
      </div>
      <div>
        <Link to="/dashboard" className={styles.button}>
          ثبت اگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
