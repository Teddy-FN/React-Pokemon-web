import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icons, Images } from "../../../assets";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    userName: false,
    password: false,
  });

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
    setError((prevState) => {
      return {
        ...prevState,
        userName: false,
      };
    });
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError((prevState) => {
      return {
        ...prevState,
        password: false,
      };
    });
  };

  const onSubmitUser = (e) => {
    e.preventDefault();
    console.log("INI USERNAME BRAY", userName);
    if (userName.length > 16 || userName.length < 4) {
      setError((prevState) => {
        return {
          ...prevState,
          userName: true,
        };
      });
    }

    if (password.length < 2 || password.length === 0) {
      setError((prevState) => {
        return {
          ...prevState,
          password: true,
        };
      });
    }
  };

  return (
    <div className="container-login">
      <div className="card-login">
        <img src={Images.pickachu} alt="pickahu" className="img-login" />

        <div className="form-container">
          <h1 className="title-login">Gets Started</h1>
          <p className="title-describe">
            Allready have an Account ? <span>Login</span>
          </p>
          <form onSubmit={onSubmitUser} className="form">
            <label className="label">UserName:</label>
            {error.userName ? <p>ERROR BRAY</p> : null}
            <input
              type="text"
              placeholder="Enter Username"
              onChange={onChangeUserName}
              value={userName}
              className="input"
            />
            <label className="label">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={onChangePassword}
              value={password}
              className="input"
            />
            <div className="checkbox-wrapper">
              <div className="checkbox-box">
                <input type="checkbox" className="checkBox" />
                <label>Remember Me</label>
              </div>
              <p>Forget Password</p>
            </div>
            <Link to="/">
              <button type="submit" className="btn btn--submit">
                Submit
              </button>
            </Link>
          </form>
          <div className="or-wrapper">
            <span>&nbsp;</span>
            <p>Or</p>
            <span>&nbsp;</span>
          </div>
          <button className="btn btn--google">
            <Icons.RiGoogleFill />
            Login With Google
          </button>
          <button className="btn btn--facebook">
            <Icons.RiFacebookFill />
            Login With Facebook
          </button>
          <button className="btn btn--twitter">
            <Icons.RiTwitterFill />
            Login With Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
