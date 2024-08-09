import React, { useState } from "react";
import { getCategory } from "../../services/admin";
import { useQuery } from "@tanstack/react-query";
import styles from "./addPost.module.css";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    image: null,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "image") setForm({ ...form, [name]: e.target.value });
    else setForm(e.target.files[0]);
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const { data } = useQuery(["category-api"], getCategory);
  //   console.log({ data });

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="image">عکس</label>
      <input type="file" name="image" id="image" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
