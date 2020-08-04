let initialState = {
    activities: [
        {id: 1, name: 'Adam', message: 'NBA is back!'},
        {id: 2, name: 'Genry', message: 'Hello im a new player'},
        {id: 3, name: 'Mary', message: 'Who want to play with me?'},
        {id: 4, name: 'Stephen', message: 'Who is 3pt god?'},
        {id: 5, name: 'Kawhi', message: 'Im fun guy ))'},
    ]
}

const homepageReducer = (state = initialState, action) => {
    return state;
}


export default homepageReducer;