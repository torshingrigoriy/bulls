import React from 'react';

import style from './Team.module.css';


function Team(props) {
    let background = props.color;
  return (
      <div className={style.team} style={{background: background}}>
          <div className={style.city}>{props.city}</div>
          <div className={style.name}>{props.name}</div>
      </div>
  );
}

export default Team;
