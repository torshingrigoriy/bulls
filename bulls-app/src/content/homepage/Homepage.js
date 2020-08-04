import React from 'react';

import style from './Homepage.module.css';

import Banner from "./banner/Banner";
import Activities from "./activities/Activities";
import StoreContext from '../../StoreContext';

function Homepage(props) {

  return (
      <div className={style.homepage}>
          <Banner/>
          <StoreContext.Consumer>
              {
                  (store)=>(
                      <Activities activities={store.getState().homepage.activities}/>
                  )
              }
          </StoreContext.Consumer>
      </div>
  );
}

export default Homepage;
