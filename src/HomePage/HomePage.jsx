import "./HomePage.css";
import React from "react";

function template() {
  return (
    <div className="home-page">
          <div className="row m-3 ">

            <div className="container bg-light col-xs-10 col-sm-5">
              <p className="para1">
                Weather forecasting is the application of science and technology to predict the conditions of the atmosphere for a given location and time. People have attempted to predict the weather informally for millennia and formally since the 19th century. Weather forecasts are made by collecting quantitative data about the current state of the atmosphere, land, and ocean and using meteorology to project how the atmosphere will change at a given place.
              </p>
              <p className="para2">
              Once calculated manually based mainly upon changes in barometric pressure, current weather conditions, and sky condition or cloud cover, weather forecasting now relies on computer-based models that take many atmospheric factors into account.
              </p>
              <p className="para2">
                In this application we can forecast weather using two ways first is weather forecasting using city name and second is weather forecasting using user current location.
              </p>

            </div>
            </div>
    </div>
  );
};

export default template;
