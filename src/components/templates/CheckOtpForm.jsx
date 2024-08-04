import React from "react";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";

function CheckOtpForm({ setStep, mobile, code, setCode }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });
    if (response) {
      setCookie(response.data);
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تأیید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره «{mobile}» را وارد کنید.</span>
      <label htmlFor="input">کد تأیید را وارد کنید</label>
      <input
        type="text"
        placeholder="کد تأیید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        id="input"
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
