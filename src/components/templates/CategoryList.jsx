import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "../../services/admin";
import styles from "./categoryList.module.css";
import Loader from "../module/Loader";

function CategoryList() {
  const { data, isLoading, error } = useQuery(["category-api"], getCategory);
  console.log({ data, isLoading, error });

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
