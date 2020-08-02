const WRITE_TEAMNAME = 'WRITE_TEAMNAME';
const WRITE_TEAMCOLOR = 'WRITE_TEAMCOLOR';
const WRITE_TEAMCITY = 'WRITE_TEAMCITY';
const ADD_TEAM = 'ADD_TEAM';

const teamsReducer = (state, action) => {
    switch(action.type) {
        case WRITE_TEAMNAME:
            state.teamname_live = action.teamname;
            return state;
        case WRITE_TEAMCOLOR:
            state.teamcolor_live = action.teamcolor;
            return state;
        case WRITE_TEAMCITY:
            state.teamcity_live = action.teamcity;
            return state;
        case ADD_TEAM:
            let newTeam = {
                id: 3,
                name: state.teamname_live,
                color: state.teamcolor_live,
                city: state.teamcity_live,
            }
            state.teams.push(newTeam);
            state.teamname_live = '';
            state.teamcolor_live = '';
            state.teamcity_live = '';
            return state;
        default: return state;
    }
}


export const addTeamAC = () => ({type: ADD_TEAM});
export const writeTeamnameAC = (teamname) => {
    return {type: WRITE_TEAMNAME, teamname: teamname}
}
export const writeTeamcolorAC = (teamcolor) => {
    return {type: WRITE_TEAMCOLOR, teamcolor: teamcolor}
}
export const writeTeamcityAC = (teamcity) => {
    return {type: WRITE_TEAMCITY, teamcity: teamcity}
}

export default teamsReducer;