import React from 'react';

import Teams from "./Teams";
import {addTeamAC, writeTeamcityAC, writeTeamcolorAC, writeTeamnameAC} from "../../redux/teams/teams-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        teamspage: state.teamspage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        writeTeamname: (teamname) => {
            dispatch(writeTeamnameAC(teamname));
        },
        writeTeamcolor: (teamcolor) => {
            dispatch(writeTeamcolorAC(teamcolor));
        },
        writeTeamcity: (teamcity) => {
            dispatch(writeTeamcityAC(teamcity));
        },
        addTeam: () => {
            dispatch(addTeamAC());
        }
    }
}

const TeamsContainer = connect(mapStateToProps, mapDispatchToProps)(Teams);

export default TeamsContainer;