import React from 'react';

import style from './User.module.css';

function User(props) {
  return (
      <div className={style.user}>
        <div className={style.image}>{props.id}</div>
        <div className={style.wrap}>
          <div className={style.name}>{props.name}</div>
          <div className={style.friends}>{props.friendsCount}</div>
        </div>
      </div>
  );
}

export default User;
