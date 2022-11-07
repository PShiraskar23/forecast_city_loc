import React from "react";
import template from "./HomePage.jsx";

class HomePage extends React.Component {
  constructor() {
    super();
    sessionStorage.clear()
  //   this.state = {
  //     isHomePage:true,
  //     isCity: false,
  //     isGeoloc: false
  //   }
  //   // console.log(this.state.isCity)
  }
  componentDidUpdate(){

  }
  

  fnSearchByGeoLoc = () => {
    this.setState({
      isGeoloc:!this.state.isGeoloc,
      isHomePage:false
    })
  }
  render() {
 
    return template.call(this);
  }
}

export default HomePage;
