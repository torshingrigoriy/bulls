let GET_TOTAL_ITEM_COUNT = 'GET_TOTAL_ITEM_COUNT';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    items: [],
    pageSize: '10',
    totalItemCount: 0,
    currentPage: 1,
}

let pagebarReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case GET_TOTAL_ITEM_COUNT: {
            return {
                ...state, totalItemCount: action.totalItemCount
            }
        }

        default: return state;
    }
}

export const getTotalItemCount = (totalItemCount) => ({type: GET_TOTAL_ITEM_COUNT, totalItemCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export default pagebarReducer;