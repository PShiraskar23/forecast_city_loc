import React from 'react'

const WeatherInfo = (data) => {
  console.log(data)
  return (
    <div className="info_wrapper ">

      {
        !data.isError ?
          <div>
            <h1>{data.cityCountry} </h1>
            <h3>{data.date}</h3>
            <h3>{data.year}</h3>
            <h3 className="temp">{data.temp}&deg;C</h3>
            <h3>{data.minTemp}&deg;C / {data.maxTemp}&deg;C </h3>
            <h3>{data.weatherStatus}</h3>
          </div> : null
      }
      {
        data.isError && <h3 >{data.errMsg}</h3>
      }
    </div>
  )
}

export default React.memo(WeatherInfo)

// export default WeatherInfo
