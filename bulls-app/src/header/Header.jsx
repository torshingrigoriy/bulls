import React from 'react';
import {NavLink} from "react-router-dom";
import logo from './../logo.png';
import style from './Header.module.css';

function Header() {
  return (
      <div className={style.header}>
          <div className={style.logo}><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></div>
          <div className={style.menu}>
              <div className={style.point}>
                  <NavLink to="/" activeClassName={style.active}>Home</NavLink>
              </div>
              <div className={style.point}>
                  <NavLink to="/blog" activeClassName={style.active}>Blog</NavLink>
              </div>
              <div className={style.point}>
                  <NavLink to="/teams" activeClassName={style.active}>Teams</NavLink>
              </div>
              <div className={style.point}>
                  <NavLink to="/courts" activeClassName={style.active}>Courts</NavLink>
              </div>
              <div className={style.point}>
                  <NavLink to="/players" activeClassName={style.active}>Players</NavLink>
              </div>
              <div className={style.point}>
                  <NavLink to="/training" activeClassName={style.active}>Training</NavLink>
              </div>
          </div>
          <div className={style.login_sign}>
              <div className={style.login}>Login</div>
              <div className={style.sign}>Sign</div>
          </div>
      </div>
  );
}

export default Header;
