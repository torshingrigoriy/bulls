import React from 'react';

import style from './Player.module.css';


function Player(props) {
  return <div className={style.player}>

    <div className={style.photo + ' ' + style.part}><img src={props.photo} alt=""/></div>
    <div className={style.name + ' ' + style.part}>{props.firstname}<br/>{props.lastname}</div>
    <div className={style.position + ' ' + style.part}>{props.position}</div>
    <div className={style.height + ' ' + style.part}>{props.height}</div>
    <div className={style.weight + ' ' + style.part}>{props.weight}</div>
    <div className={style.number + ' ' + style.part}>{props.number}</div>
    <div className={style.birthday + ' ' + style.part}>{props.birthday}</div>
    <div className={style.team + ' ' + style.part}>{props.team}</div>
    <div className={style.rating + ' ' + style.part}>{props.rating}</div>
    <div className={style.awards + ' ' + style.part}>{props.awards}</div>

  </div>
}

export default Player;
