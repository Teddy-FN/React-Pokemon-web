import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Images } from "../../../assets";
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
            <label>UserName:</label>
            {error.userName ? <p>ERROR BRAY</p> : null}
            <input
              type="text"
              placeholder="Enter Username"
              onChange={onChangeUserName}
              value={userName}
            />
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={onChangePassword}
              value={password}
            />
            <button type="submit">Submit</button>
          </form>
          <p>
            <span></span>Or<span></span>
          </p>
          <button>Login With Google</button>
          <button>Login With Facebook</button>
          <button>Login With Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
