import React from 'react';

import style from './Activities.module.css';
import Activity from "./activity/Activity";

let activities = [
    {id: 1, name: 'Michael', message: 'I have a new ball!'},
    {id: 2, name: 'Genry', message: 'Hello im a new player'},
    {id: 3, name: 'Mary', message: 'Who want to play with me?'},
    {id: 4, name: 'Stephen', message: 'Who is 3pt god?'},
    {id: 5, name: 'Gregory', message: 'Im creator!'},
    {id: 6, name: 'Katy', message: 'Im creator girl ^_^!'},
    {id: 7, name: 'LeBron', message: 'Everyone greating king!'},
    {id: 8, name: 'Dame', message: 'Buy my shoes and listen my track, yo!'},
    {id: 9, name: 'Shaq', message: 'Who calld a big guy?'},
    {id: 10, name: 'Kawhi', message: 'Im fun guy ))'},
]

let activitiesEl = activities
    .map(activity => <Activity name={activity.name} message={activity.message} />);

function Activities() {
  return (
      <div className={style.activities}>
          <div className={style.title}><h2>Latest activities</h2></div>
          <div>
              {activitiesEl}
          </div>
      </div>
  );
}

export default Activities;
