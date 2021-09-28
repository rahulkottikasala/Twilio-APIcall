import React from "react";
import "./Otp.css";

function Otp() {
  return (
    <div className="container">
      <div className="verify-container">
        <h3>OTP Verification</h3>
        <p className=" text-center">+91 9526417797 <span className="edit-number">change ?</span></p>
        <div className="input">
          <input
            type="number"
            id="number"
            name="number"
            placeholder=""
            required
          />
          <label htmlFor="number">Enter Otp</label>
        </div>
        <button className="verify-button btn "type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Otp;
