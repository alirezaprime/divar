import api from "../configs/api";

const sendOtp = async (mobile) => {
  try {
    const response = await api.post("auth/send-otp", { mobile: mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (code, mobile) => {
  try {
    const response = await api.post("auth/check-otp", { code, mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtp, checkOtp };
