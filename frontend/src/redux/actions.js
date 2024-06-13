import axios from "axios"
import { CLEAR_FILTERED, CREATE_CATEGORY, CREATE_NOTE, DELETE_CATEGORY, DELETE_NOTE, EDIT_NOTE, FILTER_BY_ARCHIVED, FILTER_BY_CATEGORY, GET_CATEGORIES, GET_NOTES, ORDER_BY_ID, SET_ARCHIVED_VALUE, SET_CATEGORY_VALUE } from "./actionType"

const URL = "http://localhost:3001"
// const URL = import.meta.env.VITE_URL;


//!--------------------------------- NOTES ---------------------------------------------------------------------------------------------

export const getNotes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/notes`)
            if (data.length > 0)
                dispatch({
                    type: GET_NOTES,
                    payload: data
                })

        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const createNote = (noteData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}/notes`, noteData)
            if (data) {
                dispatch({
                    type: CREATE_NOTE,
                    payload: data
                })
                return { success: true };
            } else {
                throw new Error("Something went wrong. ")
            }

        } catch (error) {
            window.alert("No note created. " + error.message)
            return { success: false };
        }
    }
}

export const editNote = (id, noteData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL}/notes/${id}`, noteData)
            if (data) {
                dispatch({
                    type: EDIT_NOTE,
                    payload: data
                })
                return { success: true };
            } else {
                throw new Error("Something went wrong. ")
            }

        } catch (error) {
            window.alert("No note updated. " + error.message)
            return { success: false };
        }
    }
}




export const deleteNote = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${URL}/notes/${id}`)
            dispatch({
                type: DELETE_NOTE,
                payload: id
            })

        } catch (error) {
            window.alert("No note deleted " + error.message)
        }
    }
}

//!--------------------------------- CATEGORIES ---------------------------------------------------------------------------------------------

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/categories`)
            if (data.length > 0) {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: data
                })
            }
            else {
                //! cambiar despues por sweet alert ->
                throw new Error("You must add a category. ")
            }

        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const createCategory = (categoryData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}/categories`, categoryData)
            if (data) {
                dispatch({
                    type: CREATE_CATEGORY,
                    payload: data
                })
                return { success: true };
            } else {
                throw new Error("Something went wrong. ")
            }

        } catch (error) {
            window.alert("No category created. " + error.message)
            return { success: false };
        }
    }
}

export const deleteCategory = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${URL}/categories/${id}`)
            dispatch({
                type: DELETE_CATEGORY,
                payload: id
            })

        } catch (error) {
            window.alert("No note deleted " + error.message)
        }
    }
}





//! ----------------------------------- FILTERS AND ORDERS ----------------------------------------

export const filterByArchived = (archived) => {
    return {
        type: FILTER_BY_ARCHIVED,
        payload: archived
    }
}

export const filterByCategory = (category) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: category
    }
}

export const clearFiltered = () => {
    return {
        type: CLEAR_FILTERED,
    }
}

export const setArchivedValue = (archived) => {
    return {
        type: SET_ARCHIVED_VALUE,
        payload: archived
    }
}
export const setCategoryValue = (category) => {
    return {
        type: SET_CATEGORY_VALUE,
        payload: category
    }
}



export const orderById = (criteria) => {
    return {
        type: ORDER_BY_ID,
        payload: criteria
    }
}