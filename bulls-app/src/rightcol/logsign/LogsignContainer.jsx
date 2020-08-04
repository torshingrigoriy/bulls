import React from "react";
import Logsign from "./Logsign";
import {addUserAC, changeLoginAC} from "../../redux/users/users-reducer";
import StoreContext from "../../StoreContext";

function LogsignContainer (props) {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addUser = () => {
                        let action = addUserAC();
                        store.dispatch(action);
                    }

                    let changeLogin = (newLogin) => {
                        let action = changeLoginAC(newLogin);
                        store.dispatch(action);
                    }

                    return <Logsign addUser={addUser}
                                    changeLogin={changeLogin}
                                    users={store.getState().users}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default LogsignContainer;