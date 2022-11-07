import "./Item.css";
import React from "react";
import SearchByCity from "../SearchByCity/index";
import SearchByGeoLoc from '../SearchByGeoLoc/index'

function template() {
  return (
    <div className="item">
      <div className="btn_container">
        <button className={this.state.isShowCity ? 'color-white' : 'color-blue'} onClick={this.fnSearchByCity}>Forecast Weather By City Name</button>
        <button className={this.state.isShowLoc ? 'color-white' : 'color-blue'} onClick={this.fnSearchByLoc}>Forecast Weather By Current Location</button>
      </div>

      {
        this.state.isShowCity ? <SearchByCity /> : null
      }
      {
        this.state.isShowLoc ? <SearchByGeoLoc data={this.state}/>: null
      }

    </div>
  );
};

export default template;
