import React from 'react'
import Card from './Card'
import style from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // console.log(props);

  const {cities, onClose} = props

  if (cities) {
    return (
      <div className={style.containerCards}>
        {cities.map((city) => ( // con ? se pregunta si existe algo ahí
          <Card
            key={city.id}
            onClose={() => onClose(city.id)}
            name={city.name}
            min={city.min}
            max={city.max}
            img={city.img}
            id={city.id}
          />
        ))}
      </div>
    ) } else {
        return (
          <div className={style.noCities}>
              <p className={style.noCitiesParagraph}>
              'There are no cities to display'
              </p>
          </div>
          )
      }
}
