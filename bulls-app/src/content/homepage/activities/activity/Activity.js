import React from 'react';

import style from './Activity.module.css';


function Activity(props) {
  return (
      <div className={style.activity}>
          <div className={style.name}>{props.name}</div>
          <div className={style.message}>{props.message}</div>
      </div>
  );
}

export default Activity;
