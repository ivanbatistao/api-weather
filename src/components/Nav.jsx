import React from 'react';
import Logo from './Logo'
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import './About'

export default function Nav({onSearch}) {
  return (
    <nav className={style.nav}>
      <Link to='/' className={style.link}>
        <Logo />
      </Link>
      <Link to='/about' className={style.link}>
        <span className={style.about}>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};