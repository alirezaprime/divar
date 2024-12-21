import { useState } from "react";

import styles from "./categoryForm.module.css";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const chengeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form
      onChange={chengeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {/* <p></p> */}
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />

      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />

      <button type="submit">ایجاد</button>
    </form>
  );
}

export default CategoryForm;
