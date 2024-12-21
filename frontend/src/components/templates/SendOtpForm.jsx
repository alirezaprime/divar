// import { Toaster, ToastBar } from "react-hot-toast";
// import toast, { Toaster, ToastBar } from "react-hot-toast";
import toast, { Toaster, ToastBar } from "react-hot-toast";

import styles from "./SendOtpForm.module.css";

import { sendOtp } from "services/auth";

function SendOtpForm({ setStep, mobile, setMobile, setCode }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(mobile);

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) toast("مشکلی وجود دارد ");

    //  console.log(error.response.data.message);
    console.log({ response, error });
  };
  return (
    <div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #04ff00",
            padding: "16px",
            color: "#0080ff",
            backgroundColor: "#fff",
          },
        }}
      />

      <form onSubmit={submitHandler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>
          {" "}
          برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید .
          کد تایید به این شماره پیامک خواهد شد{" "}
        </span>
        <label htmlFor="input">شماره موبایل خود را وارد نمایید</label>
        <input
          type="text"
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
