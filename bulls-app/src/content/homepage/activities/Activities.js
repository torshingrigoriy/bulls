import React from 'react';

import style from './Activities.module.css';
import Activity from "./activity/Activity";


function Activities() {
  return (
      <div className={style.activities}>
          <div className={style.title}><h2>Latest activities</h2></div>
          <div>
              <Activity name="Michael" message="I have a new ball!"/>
              <Activity name="Genry" message="Hello im a new player"/>
              <Activity name="Mary" message="Who want to play with me?"/>
              <Activity name="Stephen" message="Who is 3pt god?"/>
          </div>
      </div>
  );
}

export default Activities;
