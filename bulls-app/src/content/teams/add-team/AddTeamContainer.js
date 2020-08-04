/*
import React from 'react';

import AddTeam from "./AddTeam";

import {writeTeamnameAC, writeTeamcolorAC, writeTeamcityAC, addTeamAC} from "../../../redux/teams/teams-reducer";

function AddTeamContainer(props) {

    let writeTeamname = (teamname) => {
        let action = writeTeamnameAC(teamname);
        props.dispatch(action);
    }
    let writeTeamcolor = (teamcolor) => {
        let action = writeTeamcolorAC(teamcolor);
        props.dispatch(action);
    }
    let writeTeamcity = (teamcity) => {
        let action = writeTeamcityAC(teamcity);
        props.dispatch(action);
    }
    let addTeam = () => {
        let action = addTeamAC();
        props.dispatch(action);
    }
    return (<AddTeam writeTeamname={writeTeamname}
                     writeTeamcolor={writeTeamcolor}
                     writeTeamcity={writeTeamcity}
                     addTeam={addTeam}
                     teamspage={store.teamspage}
    />)
}

export default AddTeamContainer;*/
