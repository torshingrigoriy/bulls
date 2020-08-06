import React from 'react';

import style from './App.module.css';

import Header from "./header/Header.jsx";
import Rightcol from "./rightcol/Rightcol";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import {BrowserRouter} from "react-router-dom";
import LeftcolContainer from "./leftcol/LeftcolContainer";

function App(props) {
  return (
      <BrowserRouter>
          <div className={style.wrapper}>
              <Header/>
              <div className={style.content}>
                  <LeftcolContainer/>
                  <Content/>
                  <Rightcol/>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
