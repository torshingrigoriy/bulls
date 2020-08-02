import usersReducer from './users/users-reducer';
import teamsReducer from './teams/teams-reducer';
import homepageReducer from './homepage/homepage-reducer';


let store = {
    _state: {
        homepage: {
            activities: [
                {id: 1, name: 'Adam', message: 'NBA is back!'},
                {id: 2, name: 'Genry', message: 'Hello im a new player'},
                {id: 3, name: 'Mary', message: 'Who want to play with me?'},
                {id: 4, name: 'Stephen', message: 'Who is 3pt god?'},
                {id: 5, name: 'Kawhi', message: 'Im fun guy ))'},
            ]
        },
        teamspage: {
            teams: [
                {id: 1, name: 'Lakers', color: '#f8f804', city: 'Los Angeles'},
                {id: 2, name: 'Bulls', color: '#d70023', city: 'Chicago'},
            ],
            teamname_live: '',
            teamcolor_live: '',
            teamcity_live: ''
        },
        users: {
            existing_users: [
                {id: 1, name: 'Adam', img: '', friendsCount: '10M'},
                {id: 2, name: 'Gregory', img: '', friendsCount: '50'},
                {id: 3, name: 'LeBron', img: '', friendsCount: '35M'},
            ],
            username_live: ''
        }
    },
    _callSubscriber() {},

    getState() {
      return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.users = usersReducer(this._state.users, action);
        this._state.homepage = homepageReducer(this._state.homepage, action);
        this._state.teamspage = teamsReducer(this._state.teamspage, action);

        this._callSubscriber(this._state);
    }
}

export default store;