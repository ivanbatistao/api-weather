import React, { useState } from "react"
import Nav from "../components/Nav"
import Cards from "../components/Cards"
import { Route } from 'react-router-dom'
import About from '../components/About'
import Ciudad from '../components/Ciudad'


export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          }
          setCities((oldCities) => [...oldCities, ciudad])
        } else {
          alert("City Not Found")
        }
      })
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id))
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div>
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route exact
          path='/about'
          component={About}
      />
      <Route exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
      <Route exact
        path='/'
        render={() => <Cards cities={cities} onClose={onClose}/>}
      />
    </div>
  )
}

    // Estas líneas hacen lo mismo que las líneas 66 a la 69
    /* <Route exact
        path='/'>
        <Cards cities={cities} onClose={onClose}/>
      </Route> */