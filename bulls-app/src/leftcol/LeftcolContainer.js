import React from 'react';
import {connect} from "react-redux";
import Leftcol from "./Leftcol";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const LeftcolContainer = connect(mapStateToProps)(Leftcol);

export default LeftcolContainer;