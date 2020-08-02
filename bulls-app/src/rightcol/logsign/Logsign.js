import React from 'react';

import style from './Logsign.module.css';
import {addUserAC, changeLoginAC} from "../../redux/users/users-reducer";

function Logsign(props) {

    let newUserLogin = React.createRef();

    let addUser = () => {
        let login = newUserLogin.current.value;
        let action = addUserAC();
        props.dispatch(action);
    }

    let changeLogin = () => {
        let newLogin = newUserLogin.current.value;
        let action = changeLoginAC(newLogin);
        props.dispatch(action);
    }

  return (
      <div>
          <div className={style.title}>Sign in</div>
          <div className={style.wrap}>
              <div className={style.login}>
                  <input className={style.input} onChange={changeLogin} ref={newUserLogin} type="text" value={props.users.username_live} placeholder="Login or Email"/>
              </div>
              <div className={style.password}><input className={style.input} type="text" placeholder="Password"/></div>
              <div className={style.submit}>
                  <label className={style.remember}><input type="checkbox"/>Remember me</label>
                  <button className={style.button} onClick={addUser} >Sign in</button>
              </div>
          </div>
      </div>
  );
}

export default Logsign;
