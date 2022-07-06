import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./login";
import Home from "./home";
import "./index.css";

const App = () =>{
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    );


}

export default App;