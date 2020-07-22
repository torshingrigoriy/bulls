import React from 'react';

import style from './Homepage.module.css';

import Banner from "./banner/Banner";
import Activities from "./activities/Activities";

function Homepage() {
  return (
      <div className={style.homepage}>
          <Banner/>
          <Activities/>
      </div>
  );
}

export default Homepage;
