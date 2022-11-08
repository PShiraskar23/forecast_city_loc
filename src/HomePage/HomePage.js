import React from "react";
import template from "./HomePage.jsx";

class HomePage extends React.Component {
  
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
