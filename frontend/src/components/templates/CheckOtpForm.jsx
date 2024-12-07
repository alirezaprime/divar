function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ code, mobile });
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
