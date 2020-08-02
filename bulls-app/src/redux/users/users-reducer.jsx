const ADD_USER = 'ADD-USER';
const CHANGE_LOGIN = 'CHANGE-LOGIN';

const usersReducer = (state, action) => {
    switch(action.type) {
        case ADD_USER:
            let newUser = {
                id: 4,
                name: state.username_live,
                img: '4',
                friendsCount: '0',
            }
            state.existing_users.push(newUser);
            state.username_live = '';
            return state;
        case CHANGE_LOGIN:
            state.username_live = action.username_live;
            return state;
        default: return state;
    }
}


export const addUserAC = () => ({type:ADD_USER});
export const changeLoginAC = (username_live) => {
    return {type: CHANGE_LOGIN, username_live: username_live}
}

export default usersReducer;