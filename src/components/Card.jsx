import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom'

export default function Card({onClose, name, min, max, img, id}) {
  // acá va tu código
  // console.log(props);

  return (
      <div className={style.card}>
        <button className={style.cardButtom} onClick={onClose}>X</button>
        <div className={style.imgTitleWrapper}>
          <div>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather"></img>
          </div>
          <Link to={`/ciudad/${id}`} className={style.link}>
            <h1> { name } </h1>
          </Link>
        </div>
        <div className={style.parentContainerTemp}>
          <section className={style.containerTemp}>
            <span className={style.minMax}> Min </span>
            <span className={style.minMax}>{`${min}º`}</span>
          </section>
          <section className={style.containerTemp}>
            <span className={style.minMax}> Max </span>
            <span className={style.minMax}>{`${max}º`}</span>
          </section> 
        </div>
      </div>
  );
};