import React from "react";
import Logsign from "./Logsign";
import {addUserAC, changeLoginAC} from "../../redux/users/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => {
            dispatch(addUserAC());
        },
        changeLogin: (newLogin) => {
            dispatch(changeLoginAC(newLogin));
        }
    }
}

const LogsignContainer = connect(mapStateToProps, mapDispatchToProps)(Logsign);

export default LogsignContainer;