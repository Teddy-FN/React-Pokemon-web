import React from "react";
import "./style.css";
import { Images } from "../../../assets";
const Login = () => {
  return (
    <div className="container-login">
      <div className="card-login">
        <div className="form-container">
          <h1>HELLO THIS IS LOGIN PAGE</h1>
        </div>
        <img src={Images.pickachu} alt="pickahu" className="img-login" />
      </div>
    </div>
  );
};

export default Login;
