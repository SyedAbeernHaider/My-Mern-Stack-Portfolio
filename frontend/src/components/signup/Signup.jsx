import React, { useEffect, useState } from 'react';
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Signup = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const history = useNavigate()
  const [Inputs, setInputs] = useState({ email: "", username: "", password: "", })
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost1500/user/signup`, Inputs).then((response) => {
      if (response.data.message === "User Already Exists") {
        alert(response.data.message)
      } else {
        alert(response.data.message)
        setInputs({
          email: "",
          username: "",
          password: ""
        })
        history("/signin")
      }

    })

  }

  return (
    <>
      <div className="signup">
        <h1 className="main-heading">Signup</h1>
        <div className="signup-container">
          <div className="main-container" data-aos="fade-up">
            <div className="input-group">
              <label>Username:</label>
              <input type="text" name='username' value={Inputs.username} onChange={change} placeholder="Enter Your Name" />
            </div>
            <div className="input-group">
              <label>Email Address:</label>
              <input type="email" name='email' value={Inputs.email} onChange={change} placeholder="Enter Your Email Address" />
            </div>

            <div className="input-group">
              <label> Password:</label>
              <input type="password" name='password' value={Inputs.password} onChange={change} placeholder="Enter Your Password" />
            </div>
            <button className="submit-btn" type="submit" onClick={submit}>
              signup
            </button>
            <div className="signin-link">
              Already have an account? <a href="/signin">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
;