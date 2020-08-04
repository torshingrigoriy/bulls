import React from 'react';

import style from './Logsign.module.css';

function Logsign(props) {

    let onAddUser = (e) => {
        props.addUser();
    }

    let onChangeLogin = (e) => {
        let newLogin = e.target.value;
        props.changeLogin(newLogin);
    }

  return (
      <div>
          <div className={style.title}>Sign in</div>
          <div className={style.wrap}>
              <div className={style.login}>
                  <input className={style.input} onChange={onChangeLogin} type="text" value={props.users.username_live} placeholder="Login or Email"/>
              </div>
              <div className={style.password}><input className={style.input} type="text" placeholder="Password"/></div>
              <div className={style.submit}>
                  <label className={style.remember}><input type="checkbox"/>Remember me</label>
                  <button className={style.button} onClick={onAddUser} >Sign in</button>
              </div>
          </div>
      </div>
  );
}

export default Logsign;
