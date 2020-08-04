import React from 'react';

import style from './Users.module.css';

import User from "./user/User";

function Users(props) {
    let user = props.users.existing_users
        .map(user => <User id={user.id} name={user.name} friendsCount={user.friendsCount}/>)

  return (
      <div>
          <div className={style.title}>Users</div>
          <div>{user}</div>
      </div>

  );
}

export default Users;
