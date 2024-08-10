import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "../../services/admin";
import styles from "./sidebar.module.css"

function Sidebar() {
  const { data, isLoading } = useQuery(["category-api"], getCategory);

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ul>
        {data?.data.map((category) => (
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
