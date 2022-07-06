import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";

const login = () => {
    return (
      
    <div className="form">
      <center>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" required/>
        </div>
      </form></center>
    </div>
    );


}

export default login;