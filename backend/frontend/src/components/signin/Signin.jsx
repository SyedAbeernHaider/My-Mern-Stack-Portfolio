import React, { useState } from 'react';
import "./signin.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({ email: '', password: '' });


  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };


  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.location.origin}/user/signin`, Inputs);

      // Check if the response includes the user ID
      if (response.data._id) {
        sessionStorage.setItem('id', response.data._id);  // Save the user ID
        alert("Logged in successfully")
        dispatch(authActions.login());
        navigate('/'); // Navigate to the To-Do app
      } else {
        // Show backend error messages if present
        alert(response.data.message || 'Sign-in failed. Please try again.');
      }
    } catch (error) {
      alert('wrong email or password');
    }
  };

  return (
    <>
      <div className="signin">
        <h1 className="main-heading">Login</h1>
        <div className="signup-container">
          <div className="main-container" data-aos="fade-up">
            <div className="input-group">
              <label>Email Address:</label>
              <input type="email" name='email' value={Inputs.email} onChange={change} placeholder="Enter Your Email Address" />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" name='password' value={Inputs.password} onChange={change} placeholder="Enter Your Password" />
            </div>

            <button className="submit-btn" type="submit" onClick={submit}>
              Login
            </button>
            <div className="signup-link" data-aos="fade-up">
              Don't have an account? <a href="/signup">SignUp</a>
            </div>
          </div>
        </div>
      </div>







    </>
  )
}

export default Signin