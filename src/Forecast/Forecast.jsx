import "./Forecast.css";
import React from "react";

function template() {
  return (
    <div className="container-fluid">
      {
        !this.props.isShowGeoLoc ? <h3>Forecast Weather Using City Name</h3> : <h3>Forecast Weather Using Current Location</h3>
      }

      <div className="forecast">
        {
          this.props.isShowGeoLoc ? null :
            <div className="search_bar">
              <form onSubmit={this.fnGetData}>
                <div className="row ">
                  <div className="inputBox col-sm-3 text-start"><input type="text" placeholder="Enter City Name..." className="form-control form_input" onChange={(e) => { this.setState({ city: e.target.value }) }} /></div>
                </div>
              </form>
            </div>
        }


      
          {
              !this.state.isShow ? null : <div className="info_wrapper ">
          {
            !this.state.isError ?
              <div>
                <h1 >{this.state.cityCountry} </h1>
                <h3>{this.state.date}</h3>
                <h3>{this.state.year}</h3>
                <h3 className="temp">{this.state.temp}&deg;C</h3>
                <h3>{this.state.minTemp}&deg;C / {this.state.maxTemp}&deg;C </h3>
                <h3>{this.state.weatherStatus}</h3>
              </div> : null
          }
          {
            this.state.isError && <h3 >{this.state.errMsg}</h3>
          }
        </div>
            }

      </div>

    </div>
  );
};

export default template;
