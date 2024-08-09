import React, { useState } from "react";
import styles from "./categoryForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const queryClient = useQueryClient();

  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    //again post query get invalidat
    onSuccess: () => queryClient.invalidateQueries("category-api"),
  });
  //   console.log({ isLoading, error, data });

  const changeHandler = (e) => {
    //name input === e.target.name
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {!!error && <p>مشکلی پیش آمده است</p>}
      {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" id="name" name="name" />{" "}
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" id="slug" name="slug" />{" "}
      <label htmlFor="icon">آیکون</label>
      <input type="text" id="icon" name="icon" />
      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
