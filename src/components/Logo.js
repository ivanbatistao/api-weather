import React from 'react';
import style from './Logo.module.css'

export default function Logo () {
    return (
        <div className={style.container}>
            <img className={style.img} src="https://img.icons8.com/ios/50/000000/partly-cloudy-night--v2.png" alt="logo"></img>
            <h1 className={style.pageTitle}>Weather App</h1>
        </div>
    )
}