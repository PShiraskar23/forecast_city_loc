import React from "react";
import template from "./Item.jsx";


class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowCity: false,
      isShowLoc: false,
      city: "",
      isShowGeoLoc: false,
      country: "",
      temp: "",
      minTemp: "",
      maxTemp: "",
      weatherStatus: "",
      date: "",
      year: "",
      errMsg: "",
      cityCountry: "",
      isError: false,
      isShow:false,

    }
  }

  fnSearchByCity = () => {
    this.setState({
      isShowCity: true,
      isShowLoc: false
    })
  }

  getPos = () => {
    let locObj = navigator.geolocation

    if (locObj) {
      locObj.getCurrentPosition(this.scb, this.ecb)

    } else {
      alert('Browser Does Not Support GeoLocation')
    }
  }
 
  fnSearchByLoc = () => {
    this.setState({
      isShowLoc: true,
      isShowCity: false,
    })
    this.getPos()
  }
  scb = (pos) => {
    let latitude = pos.coords.latitude
    let longitude = pos.coords.longitude

    if (latitude && longitude) {
      let BaseUrl = "https://api.opencagedata.com/geocode/v1/json"
      let key = "546db18e3c6f4616a3c04b58a50dd8be"
      const url = `${BaseUrl}?q=${latitude}+${longitude}&key=${key}`

      fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
     
            this.setState({
              city: res.results[0].components.city,
              isShowGeoLoc:true
              
            })
         this.fnShowData(res.results[0].components.city)

        })
        .catch((err) => {
          alert(err)
        })
    }

  }
  ecb = (err) => {
    alert(err.message)
    this.setState({
      errMsg: err.message,
      isError: true,
      isShow:true
    })
  }


  fnShowData=(city)=>{
    let baseUrl= "https://api.openweathermap.org/data/2.5/weather";
    let key= "69e5ff4a36bcadaf66ef384e0e3824f4";
   
    fetch(`${baseUrl}?q=${city}&appid=${key}&units=metric`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        let cityCountry = `${res.name}, ${res.sys.country}`
        let minTemp = `${Math.floor(res.main.temp_min)}`
        let maxTemp = `${Math.ceil(res.main.temp_max)}`
        let temp = `${Math.round(res.main.temp)}`

        
        this.setState({
          cityCountry: cityCountry,
          country:res.sys.country,
          temp: temp,
          minTemp: minTemp,
          maxTemp: maxTemp,
          weatherStatus: res.weather[0].main,
          isError: false,
          isShow:true
        })
        
        this.dateFunction()

      })
      .catch((err) => {
          this.setState({
            errMsg: `${err}`,
            isError: true,
            isShow:true
          })
      })

  }

  dateFunction = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Sunnday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todayDate = new Date()

    let datePattern = `${todayDate.getDate()} ${months[todayDate.getMonth()]} ${days[todayDate.getDay()]}`
    this.setState({
      date: datePattern,
      year: todayDate.getFullYear()
    })
  


  }
  render() {
    return template.call(this);
  }
}

export default Item;
