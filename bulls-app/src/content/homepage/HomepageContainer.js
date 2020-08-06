import React from "react";
import {connect} from "react-redux";
import Homepage from "./Homepage";

let mapStateToProps = (state) => {
    return {
        activities: state.homepage.activities
    }
}

const HomepageContainer = connect(mapStateToProps)(Homepage);

export default HomepageContainer;