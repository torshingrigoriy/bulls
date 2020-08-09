
import player1 from '../../assets/images/player1.png';
import player2 from '../../assets/images/player2.png';
import player3 from '../../assets/images/player3.png';
import player4 from '../../assets/images/player4.png';

const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

const WRITE_FIRSTNAME = 'WRITE_FIRSTNAME';
const WRITE_LASTNAME = 'WRITE_LASTNAME';
const WRITE_POSITION = 'WRITE_POSITION';
const WRITE_HEIGHT = 'WRITE_HEIGHT';
const WRITE_WEIGHT = 'WRITE_WEIGHT';
const WRITE_NUMBER = 'WRITE_NUMBER';
const WRITE_BIRTHDAY = 'WRITE_BIRTHDAY';
const WRITE_TEAM = 'WRITE_TEAM';
const WRITE_AWARDS = 'WRITE_AWARDS';

const ADD_PHOTO = 'ADD_PHOTO';
const ADD_PLAYER = 'ADD_PLAYER';
const ADD_AWARDS = 'ADD_AWARDS';

const CHANGE_RATING = 'CHANGE_RATING';
const SET_PLAYERS = 'SET_PLAYERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    players: [],
    livedata: {
        firstname_live: '',
        lastname_live: '',
        position_live: '',
        height_live: '',
        weight_live: '',
        number_live: '',
        birthday_live: '',
        team_live: '',
        awards_live: '',
    },
    isFetching: false
}
const playersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLAYER: {
            let newPlayer = {
                id: 4,
                photo: player1,
                firstname: state.livedata.firstname_live,
                lastname: state.livedata.lastname_live,
                position: state.livedata.position_live,
                height: state.livedata.height_live,
                weight: state.livedata.weight_live,
                number: state.livedata.number_live,
                birthday: state.livedata.birthday_live,
                team: state.livedata.team_live,
                awards: state.livedata.awards_live,
            }
            return {
                ...state,
                players: [...state.players, newPlayer],
                livedata: {
                    firstname_live: '',
                    lastname_live: '',
                    position_live: '',
                    height_live: '',
                    weight_live: '',
                    number_live: '',
                    birthday_live: '',
                    team_live: '',
                    awards_live: ''
                }
            }
        }
        case WRITE_FIRSTNAME: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    firstname_live: action.firstname_live
                }
            }
        }
        case WRITE_LASTNAME: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    lastname_live: action.lastname_live
                }
            }
        }
        case WRITE_POSITION: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    position_live: action.position_live
                }
            }
        }
        case WRITE_HEIGHT: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    height_live: action.height_live
                }
            }
        }
        case WRITE_WEIGHT: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    weight_live: action.weight_live
                }
            }
        }
        case WRITE_NUMBER: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    number_live: action.number_live
                }
            }
        }
        case WRITE_BIRTHDAY: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    birthday_live: action.birthday_live
                }
            }
        }
        case WRITE_TEAM: {
            return {
                ...state,
                livedata: {
                    ...state.livedata,
                    team_live: action.team_live
                }
            }
        }
        case LIKE: {
            return {
                ...state,
                players: state.players.map(p => {
                    if (p.id === action.id) {
                        return {
                            ...p, rating: '1'
                        }
                    }
                    return p;
                })
            }
        }
        case DISLIKE: {
            return {
                ...state,
                players: state.players.map(p => {
                    if(p.id === action.id) {
                        return {
                            ...p, rating: '-1'
                        }
                    }
                    return p;
                })
            }
        }
        case SET_PLAYERS: {
            return {
                ...state,
                players: [...action.players]
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const like = (id) => ({type: LIKE, id: id});
export const dislike = (id) => ({type: DISLIKE, id: id});
export const writeFirstname = (firstname_live) => ({type: WRITE_FIRSTNAME, firstname_live});
export const writeLastname = (lastname_live) => ({type: WRITE_LASTNAME, lastname_live});
export const writePosition = (position_live) => ({type: WRITE_POSITION, position_live});
export const writeHeight = (height_live) => ({type: WRITE_HEIGHT, height_live});
export const writeWeight = (weight_live) => ({type: WRITE_WEIGHT, weight_live});
export const writeNumber = (number_live) => ({type: WRITE_NUMBER, number_live});
export const writeBirthday = (birthday_live) => ({type: WRITE_BIRTHDAY, birthday_live});
export const writeTeam = (team_live) => ({type: WRITE_TEAM, team_live});
export const writeAwards = (awards_live) => ({type: WRITE_AWARDS, awards_live});
export const addPhoto = () => ({type: ADD_PHOTO});
export const addPlayer = () => ({type: ADD_PLAYER});
export const addAwards = () => ({type: ADD_AWARDS});
export const changeRating = (id) => ({type: CHANGE_RATING, id});
export const setPlayers = (players) => ({type: SET_PLAYERS, players});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default playersReducer;