import React from 'react';

import style from './Activities.module.css';
import Activity from "./activity/Activity";


function Activities(props) {
    let activitiesEl = props.activities
        .map(activity => <Activity name={activity.name} message={activity.message} />);

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
