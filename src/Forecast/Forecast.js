import React from "react";
import template from "./Forecast.jsx";

class Forecast extends React.Component {
  constructor() {
    super()
    this.state = {
      city: "",
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

  weatherApi = {
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    key: "69e5ff4a36bcadaf66ef384e0e3824f4"
  }

  fnGetData = (eve) => {
    eve.preventDefault()
    fetch(`${this.weatherApi.baseUrl}?q=${this.state.city}&appid=${this.weatherApi.key}&units=metric`)
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
        
        console.log("success")
        this.dateFunction()

      })
      .catch((err) => {
          this.setState({
            errMsg: `${err.message}`,
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

export default Forecast;
