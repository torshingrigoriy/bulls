import {combineReducers, createStore} from "redux";
import usersReducer from "./users/users-reducer";
import homepageReducer from "./homepage/homepage-reducer";
import teamsReducer from "./teams/teams-reducer";

let reducers = combineReducers({
    users: usersReducer,
    homepage: homepageReducer,
    teamspage: teamsReducer
});

let store = createStore(reducers);

export default store;
