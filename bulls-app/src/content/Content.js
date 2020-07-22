import React from 'react';

import style from './Content.module.css';

import Homepage from "./homepage/Homepage";
import Blog from "./blog/Blog";
import Courts from "./courts/Courts";
import Players from "./players/Players";
import Teams from "./teams/Teams";
import Training from "./training/Training";
import {Route} from "react-router-dom";

function Content() {
  return (
      <div className={style.content}>
          <Route exact path='/' component={Homepage} />
          <Route path='/blog' component={Blog} />
          <Route path='/courts' component={Courts} />
          <Route path='/players' component={Players} />
          <Route path='/teams' component={Teams} />
          <Route path='/training' component={Training} />
      </div>
  );
}

export default Content;
