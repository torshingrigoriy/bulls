import React from 'react';

import style from './App.module.css';

import Header from "./header/Header.jsx";
import Leftcol from "./leftcol/Leftcol";
import Rightcol from "./rightcol/Rightcol";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
          <div className={style.wrapper}>
              <Header/>
              <div className={style.content}>
                  <Leftcol users={props.store.getState().users}  />
                  <Content data={props.store} dispatch={props.dispatch}/>
                  <Rightcol users={props.store.getState().users} dispatch={props.dispatch}/>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
