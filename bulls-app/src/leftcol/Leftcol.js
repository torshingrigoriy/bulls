import React from 'react';

import style from './Leftcol.module.css';

import Users from "./users/Users";

function Leftcol(props) {
  return (
      <div className={style.leftcol}>
            <Users users={props.users.existing_users}/>
      </div>

  );
}

export default Leftcol;
