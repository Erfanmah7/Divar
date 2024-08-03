import React from "react";

function SendOtpForm({ step, moblie, setMobile }) {
  const submitHandler = (e) => {
    //no loading page
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید، کد
        تأیید به این شماره ارسال خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        placeholder="شماره موبایل"
        id="input"
        value={moblie}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تأیید</button>
    </form>
  );
}

export default SendOtpForm;
