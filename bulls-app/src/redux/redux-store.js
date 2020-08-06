import {combineReducers, createStore} from "redux";
import usersReducer from "./users/users-reducer";
import homepageReducer from "./homepage/homepage-reducer";
import teamsReducer from "./teams/teams-reducer";
import playersReducer from "./players/players-reducer";

let reducers = combineReducers({
    users: usersReducer,
    homepage: homepageReducer,
    teamspage: teamsReducer,
    playerspage: playersReducer
});

let store = createStore(reducers);
window.store = store;
export default store;
