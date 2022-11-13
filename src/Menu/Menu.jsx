import "./Menu.css";
import React from "react";
import HomePage from "../HomePage";
import Item from '../Item/index'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function template() {
  return (
    <div className="menu">
        <nav>
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/forecast">Forecast</a></li>
          </ul>
        </nav>

      <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/forecast" element={<Item/>} />
            <Route path="/*" element={<Navigate to ='home'/>} />
          </Routes>
      </HashRouter>

    </div>
  );
};

export default template;
