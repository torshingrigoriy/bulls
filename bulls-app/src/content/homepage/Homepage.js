import React from 'react';

import style from './Homepage.module.css';

import Banner from "./banner/Banner";
import Activities from "./activities/Activities";

function Homepage(props) {

  return (
      <div className={style.homepage}>
          <Banner/>
          <Activities activities={props.homepageData.activities}/>
      </div>
  );
}

export default Homepage;
