import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

import { getCategory } from "src/services/admin";

import styles from "./AddPost.module.css";
import { getCookie } from "utils/cookie";
import axios from "axios";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: null,
    images: null,
  });

  const { data } = useQuery(["get-category"], getCategory);
  console.log(data);

  const chengeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      // console.log(event.target.files[0]);
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    console.log(form);
    const formData = new FormData();
    ///////////////////////////////////////////////////
    // formData.append("title", form["title"]);
    // formData.append("content", form["content"]);
    // formData.append("amount", form["amount"]);
    // formData.append("city", form["city"]);
    // formData.append("category", form["category"]);
    // formData.append("images", form["images"]);
    ///////////////////////////////////////////////////
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((error) => toast.error("مشکلی پیش آمده است "));
  };

  return (
    <div>
      <form onChange={chengeHandler} className={styles.form}>
        <h3>افزودن آگهی</h3>

        <label htmlFor="title">عنوان</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="content">توضیحات</label>
        <textarea id="content" name="content" />

        <label htmlFor="amount">مبلغ</label>
        <input type="number" id="amount" name="amount" />

        <label htmlFor="city">شهر</label>
        <input type="text" id="city" name="city" />

        <label htmlFor="category">دسته بندی</label>
        <select name="category" id="category">
          {data?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="images">عکس</label>
        <input type="file" id="images" name="images" />

        <button onClick={addHandler}>ایجاد</button>
      </form>
    </div>
  );
}

export default AddPost;
