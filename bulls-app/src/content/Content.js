import React from 'react';

import style from './Content.module.css';

import Blog from "./blog/Blog";
import Courts from "./courts/Courts";
import TeamsContainer from "./teams/TeamsContainer";
import Training from "./training/Training";
import {Route} from "react-router-dom";
import HomepageContainer from "./homepage/HomepageContainer";
import PlayersContainer from "./players/PlayersContainer";

function Content(props) {

  return (
      <div className={style.content}>
          <Route exact path='/' render={() => <HomepageContainer />} />
          <Route path='/blog' component={Blog} />
          <Route path='/courts' component={Courts} />
          <Route path='/players' render={() => <PlayersContainer/>} />
          <Route path='/teams' render={() => <TeamsContainer />} />
          <Route path='/training' component={Training} />
      </div>
  );
}

export default Content;
