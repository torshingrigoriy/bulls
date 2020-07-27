import React from 'react';

import style from './Regsign.module.css';

function Regsign() {
  return (
      <div>
          <div className={style.title}>Sign in</div>
          <div className="login"><input type="text" placeholder="Login or Email"/></div>
          <div className="password"><input type="text" placeholder="Password"/></div>
          <div className="password"><input type="submit" value="Sign in"/></div>
      </div>
  );
}

export default Regsign;
