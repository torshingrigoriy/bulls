const WRITE_TEAMNAME = 'WRITE_TEAMNAME';
const WRITE_TEAMCOLOR = 'WRITE_TEAMCOLOR';
const WRITE_TEAMCITY = 'WRITE_TEAMCITY';
const ADD_TEAM = 'ADD_TEAM';

let initialState = {
    teams: [
        {id: 1, name: 'Lakers', color: '#f8f804', city: 'Los Angeles'},
        {id: 2, name: 'Bulls', color: '#d70023', city: 'Chicago'},
    ],
    teamname_live: '',
    teamcolor_live: '',
    teamcity_live: ''
}

const teamsReducer = (state = initialState, action) => {
    switch(action.type) {
        case WRITE_TEAMNAME: {
            return {
                ...state,
                teamname_live: action.teamname
            }
        }
        case WRITE_TEAMCOLOR: {
            return {
                ...state,
                teamcolor_live: action.teamcolor,
            }
        }
        case WRITE_TEAMCITY: {
            return {
                ...state,
                teamcity_live: action.teamcity
            }
        }
        case ADD_TEAM: {
            let newTeam = {
                id: 3,
                name: state.teamname_live,
                color: state.teamcolor_live,
                city: state.teamcity_live,
            }
            return {
                ...state,
                teams: [...state.teams, newTeam ],
                teamname_live: '',
                teamcolor_live: '',
                teamcity_live: '',
            }
        }
        default: return state;
    }
}


export const writeTeamnameAC = (teamname) => {
    return {type: WRITE_TEAMNAME, teamname: teamname}
}
export const writeTeamcolorAC = (teamcolor) => {
    return {type: WRITE_TEAMCOLOR, teamcolor: teamcolor}
}
export const writeTeamcityAC = (teamcity) => {
    return {type: WRITE_TEAMCITY, teamcity: teamcity}
}
export const addTeamAC = () => ({type: ADD_TEAM});

export default teamsReducer;