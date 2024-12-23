import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCategory } from "src/services/admin";

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
  };

  return (
    <div>
      <form onChange={chengeHandler}>
        <h3>افزودن آگهی</h3>

        <label htmlFor="title">عنوان</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="content">توضیحات</label>
        <textarea id="content" name="content" />

        <label htmlFor="amount">مبلغ</label>
        <input type="text" id="amount" name="amount" />

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
