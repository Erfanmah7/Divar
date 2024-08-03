import React from "react";

function CheckOtpForm({ setStep, mobile, code, setCode }) {
  return (
    <form>
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
