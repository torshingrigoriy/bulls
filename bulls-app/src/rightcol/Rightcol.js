import React from 'react';

import style from './Rightcol.module.css';

import Logsign from "./logsign/Logsign";

function Rightcol(props) {
  return (
      <div className={style.rightcol}>
        <Logsign users={props.users} dispatch={props.dispatch}/>
      </div>
  );
}

export default Rightcol;
