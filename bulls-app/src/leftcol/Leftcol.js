import React from 'react';

import style from './Leftcol.module.css';

import Users from "./users/Users";
import StoreContext from '../StoreContext';
function Leftcol(props) {
  return (
      <div className={style.leftcol}>
            <StoreContext.Consumer>
                {
                    (store) => (
                        <Users users={store.getState().users}/>
                    )
                }
            </StoreContext.Consumer>
      </div>

  );
}

export default Leftcol;
