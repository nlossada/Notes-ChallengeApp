import { GET_CATEGORIES, GET_NOTES } from "./actionType"

const initialState = {
    allNotes: [],
    allCategories: [],

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_NOTES:
            return {
                ...state,
                allNotes: payload,
            }
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: payload,
            }




        default:
            return {
                ...state
            }

    }
}



export default reducer