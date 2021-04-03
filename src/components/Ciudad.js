import React from "react"
import style from "./Ciudad.module.css"

export default function Ciudad({ city }) {
  if (city) {
    return (
      <div className={style.city}>
        <div className={style.container}>
          <h2>{city.name}</h2>
          <div className={style.info}>
            <div>
              <strong>Temperatura:</strong> {city.temp} ºC
            </div>
            <div>
              <strong>Clima:</strong> {city.weather}
            </div>
            <div>
              <strong>Viento:</strong> {city.wind} km/h
            </div>
            <div>
              <strong>Cantidad de nubes:</strong> {city.clouds}
            </div>
            <div>
              <strong>Latitud:</strong> {city.latitud}º
            </div>
            <div>
              <strong>Longitud:</strong> {city.longitud}º
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={style.displayNoCities}>
        <p className={style.noCities}>
          There are no cities to display. Click on WeatherApp, type the name of
          a city in the search bar, hit enter or hit the bottom ADD A NEW CITY
          to get the weather of the city and click on the name of the city to
          display more information about the weather of the city.
        </p>
      </div>
    )
  }
}
