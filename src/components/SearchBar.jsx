import React, { useState } from 'react';
import style from './SearchBar.module.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div className={style.mainParentContainer}>
      <form className={style.wapperInputButtom} 
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city)
      }}>
        <input className={style.input}
          type="text"
          placeholder=" SEARCH FOR A CITY"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input 
          className={style.buttom} 
          type="submit" 
          value="ADD A NEW CITY" 
        />
      </form>
    </div>
  );
}