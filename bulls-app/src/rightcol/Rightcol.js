import React from 'react';

import style from './Rightcol.module.css';

import LogsignContainer from "./logsign/LogsignContainer";

function Rightcol(props) {
  return (
      <div className={style.rightcol}>
        <LogsignContainer/>
      </div>
  );
}

export default Rightcol;
