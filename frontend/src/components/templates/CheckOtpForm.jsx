import { checkOtp } from "services/auth";
import { setCookie } from "src/utils/cookie";

function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log({ code, mobile });
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(code, mobile);
    if (response) {
      setCookie(response.data);
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
