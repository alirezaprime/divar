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

const getCategory = async () => {
  try {
    const response = await api.get("category");
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found.");
    }
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error("Conflict: The category already exists.");
    } else {
      throw new Error("An error occurred while fetching the categories.");
    }
  }
};

export { addCategory, getCategory };
/////////////////////////////////////////////////////////////////////////////////

// import api from "configs/api";

// const addCategory = (data) => {
//   api.post("category", data);
// };

// export { addCategory };
/////////////////////////////////////////////////////////////////////////////////
// const getCategory = async () => {
//   try {
//     const response = await api.get("category");
//     return response.data; // اضافه کردن بازگشت داده‌ها
//   } catch (error) {
//     if (error.response && error.response.status === 409) {
//       throw new Error("Conflict: The category already exists.");
//     } else {
//       throw new Error("An error occurred while adding the category.");
//     }
//   }
// };

// const getCategory = () => api.get("category");
