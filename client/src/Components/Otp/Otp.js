import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import "./Otp.css";
import Axios from "axios";

function Otp() {
  const { number } = useContext(AppContext);
  const [otp, setOtp] = useState("");
  const handleOtp = (event) => setOtp(event.target.value);
  var details = {
    number,
    otp
  }

  const handleOtpSubmit = () => {
  Axios.post('http://localhost:7000/verify', {details}).then((res) =>
    console.log("response", res)
  );
  }

  return (
    <div className="container">
      <div className="verify-container">
        <h3>OTP Verification</h3>
        <p className=" text-center">
          +91 {number} <span className="edit-number">change ?</span>
        </p>
        <form action="">
        <div className="input">
          <input
            type="number"
            value={otp}
            onChange={handleOtp}
            id="otp"
            name="otp"
            placeholder=""
            required
          />
          <label htmlFor="number">Enter Otp</label>
        </div>
        </form>
        <button
          className="verify-button btn"
          onClick={handleOtpSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Otp;
