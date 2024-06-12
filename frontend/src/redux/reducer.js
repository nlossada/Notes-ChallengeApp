import { GET_NOTES } from "./actionType"

const initialState = {
    allNotes: [],

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_NOTES:
            return {
                ...state,
                allNotes: payload,
            }




        default:
            return {
                ...state
            }

    }
}



export default reducer