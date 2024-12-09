import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";

function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const { refetch } = useQuery(["profile"], getProfile);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log({ code, mobile });
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(code, mobile);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) toast("مشکلی وجود دارد ");
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد وارد شده به شماره ی "${mobile}" را وارد بکنید </span>
      <label htmlFor="input">کد تایید را وارد کنید </label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید "
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
