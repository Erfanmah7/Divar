import React, { useState } from "react";
import { getCategory } from "../../services/admin";
import { useQuery } from "@tanstack/react-query";
import styles from "./addPost.module.css";
import axios from "axios";
import { getCookie } from "../../utils/cookie";
import toast from "react-hot-toast";

function AddPost() {
  const { data, isLoading } = useQuery(["category-api"], getCategory);
  //   console.log({ data });

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") setForm({ ...form, [name]: e.target.value });
    else setForm({ ...form, [name]: e.target.files[0] });
  };

  const addHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URI}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setForm({
          title: "",
          content: "",
          category: "",
          city: "",
          amount: null,
          images: null,
        });
        e.target.value = ""
      })
      .catch((error) => toast.error("مشکلی پیش آمده است"));
  };

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
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler} disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}
export default AddPost;
