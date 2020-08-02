import React from 'react';

import style from './Content.module.css';

import Homepage from "./homepage/Homepage";
import Blog from "./blog/Blog";
import Courts from "./courts/Courts";
import Players from "./players/Players";
import Teams from "./teams/Teams";
import Training from "./training/Training";
import {Route} from "react-router-dom";

function Content(props) {

  return (
      <div className={style.content}>
          <Route exact path='/' render={() => <Homepage homepageData={props.data.getState().homepage}/>} />
          <Route path='/blog' component={Blog} />
          <Route path='/courts' component={Courts} />
          <Route path='/players' render={() => <Players/>} />
          <Route path='/teams' render={() => <Teams dispatch={props.dispatch} teamspage={props.data.getState().teamspage}/>} />
          <Route path='/training' component={Training} />
      </div>
  );
}

export default Content;
