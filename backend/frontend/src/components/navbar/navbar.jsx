import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../../store/index.js';
import "./navbar.css";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }

  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    if (userId) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <nav>
      <input type="checkbox" id="check" checked={isChecked} onChange={toggleMenu} />

      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <label className="logo">S.A.B.H</label>

      <ul className={isChecked ? "show" : ""}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skill" activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" activeClassName="active">
            Projects
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/signup" activeClassName="active">
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" activeClassName="active">
                Login
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/" onClick={logout} activeClassName="active">
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
