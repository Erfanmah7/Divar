import { sendOtp } from "../../services/auth";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const submitHandler = async (e) => {
    //no loading page
    e.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error?.response.data.message);
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
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تأیید</button>
    </form>
  );
}

export default SendOtpForm;
