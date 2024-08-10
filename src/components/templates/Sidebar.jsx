import React from "react";
import styles from "./sidebar.module.css";

function Sidebar({ category }) {
  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ul>
        {category.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
