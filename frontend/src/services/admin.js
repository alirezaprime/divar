// import api from "configs/api";

// const addCategory = (data) => {
//   api.post("category", data);
// };

// export { addCategory };

import api from "configs/api";

const addCategory = async (data) => {
  try {
    const response = await api.post("category", data);
    return response.data; // اضافه کردن بازگشت داده‌ها
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error("Conflict: The category already exists.");
    } else {
      throw new Error("An error occurred while adding the category.");
    }
  }
};

export { addCategory };
