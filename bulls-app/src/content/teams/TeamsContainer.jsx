import React from 'react';

import Teams from "./Teams";
import StoreContext from "../../StoreContext";
import {addTeamAC, writeTeamcityAC, writeTeamcolorAC, writeTeamnameAC} from "../../redux/teams/teams-reducer";

function TeamsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let writeTeamname = (teamname) => {
                        let action = writeTeamnameAC(teamname);
                        store.dispatch(action);
                    }
                    let writeTeamcolor = (teamcolor) => {
                        let action = writeTeamcolorAC(teamcolor);
                        store.dispatch(action);
                    }
                    let writeTeamcity = (teamcity) => {
                        let action = writeTeamcityAC(teamcity);
                        store.dispatch(action);
                    }
                    let addTeam = () => {
                        let action = addTeamAC();
                        store.dispatch(action);
                    }
                    let addTeamActions = {
                        writeTeamname: writeTeamname,
                        writeTeamcolor: writeTeamcolor,
                        writeTeamcity: writeTeamcity,
                        addTeam: addTeam
                    }
                    return <Teams teamspage={store.getState().teamspage} addTeamActions={addTeamActions}/>
                }
            }
        </StoreContext.Consumer>
    )

}

export default TeamsContainer;