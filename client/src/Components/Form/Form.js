import React from "react";

import './Form.css'

function Form() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Enter Details</h1>
        <form className="form" action="" autoComplete="off">
          <div className="input-group">
            <input type="text" id="fname" name="fname" placeholder="" required/>
            <label className="" htmlFor="fname">First Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="lname" name="lname" placeholder="" required/>
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="input-group">
            <input type="number" id="number" name="number" placeholder="" required/>
            <label htmlFor="number">Mobile Number</label>
          </div>
          <button className="submit-button btn "type="submit">Submit</button>
        </form>
        </div>
      </div>
  );
}

export default Form;
