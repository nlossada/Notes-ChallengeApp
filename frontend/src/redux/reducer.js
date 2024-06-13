import { CLEAR_FILTERED, CREATE_CATEGORY, CREATE_NOTE, DELETE_CATEGORY, DELETE_NOTE, EDIT_NOTE, FILTER_BY_ARCHIVED, FILTER_BY_CATEGORY, GET_CATEGORIES, GET_NOTES, ORDER_BY_ID, SET_ARCHIVED_VALUE, SET_CATEGORY_VALUE } from "./actionType"

const initialState = {
    allNotes: [],
    allCategories: [],
    filteredNotes: [],
    isFilteredArchived: false,
    isFilteredCategory: false,
    archivedValue: "default",
    categoryValue: "default",
    isOrdered: false,

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        //!------------------------------------------------------NOTES ------------------------------------
        case GET_NOTES:
            return {
                ...state,
                allNotes: payload,
            }
        case CREATE_NOTE:
            return {
                ...state,
                allNotes: [...state.allNotes, payload]
            }
        case DELETE_NOTE:
            const noDeletedNotes = state.allNotes.filter(note => note.id !== payload)
            return {
                ...state,
                allNotes: noDeletedNotes
            }
        case EDIT_NOTE:
            const noUpdatedNotes = state.allNotes.filter(note => note.id !== payload.id)
            return {
                ...state,
                allNotes: [...noUpdatedNotes, payload]
            }

        //!-------------------------FILTERS----------------------------------------------------------
        case FILTER_BY_ARCHIVED:
            if (payload === "all") {
                if (state.isFilteredCategory) {
                    return {
                        ...state,
                        filteredNotes: [...state.filteredNotes],
                        isFilteredArchived: true
                    }
                }
                else {
                    return {
                        ...state,
                        filteredNotes: [...state.allNotes],
                        isFilteredArchived: true
                    }
                }
            }
            let filteredArchived = []
            if (payload === "active") {
                if (state.isFilteredCategory) {
                    filteredArchived = state.filteredNotes.filter(note => note.archived === false)
                }
                else {
                    filteredArchived = state.allNotes.filter(note => note.archived === false)
                }
            } else if (payload === "archived") {
                if (state.isFilteredCategory) {
                    filteredArchived = state.filteredNotes.filter(note => note.archived === true)
                }
                else {
                    filteredArchived = state.filteredNotes.filter(note => note.archived === true)
                }
            }
            return {
                ...state,
                filteredNotes: filteredArchived,
                isFilteredArchived: true
            }
        case SET_ARCHIVED_VALUE:
            return {
                ...state,
                archivedValue: payload
            }
        case FILTER_BY_CATEGORY:
            if (payload === "all") {
                if (state.isFilteredArchived) {
                    return {
                        ...state,
                        filteredNotes: [...state.filteredNotes],
                        isFilteredCategory: true
                    }
                }
                else {
                    return {
                        ...state,
                        filteredNotes: [...state.allNotes],
                        isFilteredCategory: true
                    }
                }
            }
            let filteredByCategory = []
            if (state.isFilteredArchived) {
                filteredByCategory = state.filteredNotes.filter(
                    note => {
                        return note.categories.some(category => category.toUpperCase() === payload.toUpperCase())
                    })
            }
            else {
                filteredByCategory = state.allNotes.filter(
                    note => {
                        return note.categories.some(category => category.toUpperCase() === payload.toUpperCase())
                    })
            }
            return {
                ...state,
                filteredNotes: filteredByCategory,
                isFilteredCategory: true
            }

        case SET_CATEGORY_VALUE:
            return {
                ...state,
                categoryValue: payload
            }
        case CLEAR_FILTERED:
            return {
                ...state,
                isFilteredCategory: false,
                isFilteredArchived: false,
                isOrdered: false,
                categoryValue: "default",
                archivedValue: "default",
                filteredNotes: [...state.allNotes]
            }

        case ORDER_BY_ID:
            let orderCopyState;
            if (state.filteredNotes.length === 0) {
                orderCopyState = [...state.allNotes]
            } else {
                orderCopyState = [...state.filteredNotes]
            }
            if (payload === "oldest") {
                orderCopyState.sort((a, b) => a.id - b.id)
            }
            if (payload === "newest") {
                orderCopyState.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                filteredNotes: orderCopyState,
                isOrdered: true
            }




        //!------------------------------------------CATEGORIES------------------------------------------------
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: payload,
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                allCategories: [...state.allCategories, payload]
            }
        case DELETE_CATEGORY:
            const noDeletedCategories = state.allCategories.filter(category => category.id !== payload)
            return {
                ...state,
                allCategories: noDeletedCategories
            }




        default:
            return {
                ...state
            }

    }
}



export default reducer