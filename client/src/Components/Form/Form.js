import React, { useState, useContext} from "react";
import { useHistory } from 'react-router-dom'
import { AppContext } from "../../AppContext";
import Axios from "axios";

import "./Form.css";

function Form() {
  const history = useHistory();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const { number, setNumber } = useContext(AppContext);

  const handleNumberChange = (event) => setNumber(event.target.value);

  const handleFormSubmit = () => {
    Axios.post('http://localhost:7000', { number });
    history.push('/verify');
  }
    return (
      <div className="container">
        <div className="form-container">
          <h1>Enter Details</h1>
          <form className="form" action="" autoComplete="off">
            <div className="input-group">
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                id="fname"
                name="fname"
                placeholder=""
                required
              />
              <label className="" htmlFor="fname">
                First Name
              </label>
            </div>
            <div className="input-group">
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                id="lname"
                name="lname"
                placeholder=""
                required
              />
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="input-group">
              <input
                type="number"
                value={number}
                onChange={handleNumberChange}
                id="number"
                name="number"
                placeholder=""
                required
              />
              <label htmlFor="number">Mobile Number</label>
            </div>
            <button
              onClick={handleFormSubmit}
              className="submit-button btn "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };


export default Form;
