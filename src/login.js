import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const Login = () => {
    return (
      
        <div className="form">
        <center>
        <div className="app1">
<div className="login-form1">
        <form>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <Link class="link" to="/Home">submit</Link>
        </form></div></div>
        </center>
      </div>
    );


}

export default Login;