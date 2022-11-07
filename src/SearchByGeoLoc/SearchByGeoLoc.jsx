import "./SearchByGeoLoc.css";
import React from "react";

function template() {
  return (
    <div className="search-by-geo-loc">
      <h3>Forecast Weather By Current Location</h3>

      <div>
        {
          !this.props.data.isShow ? null : <div className="info_wrapper ">
            {
              !this.props.data.isError ?
                <div>
                  <h1 >{this.props.data.cityCountry} </h1>
                  <h3>{this.props.data.date}</h3>
                  <h3>{this.props.data.year}</h3>
                  <h3 className="temp">{this.props.data.temp}&deg;C</h3>
                  <h3>{this.props.data.minTemp}&deg;C / {this.props.data.maxTemp}&deg;C </h3>
                  <h3>{this.props.data.weatherStatus}</h3>
                </div> : null
            }
            {
              this.props.data.isError && <h3 >{this.props.data.errMsg}</h3>
            }
          </div>
        }
      </div>

    </div>
  );
};

export default template;
