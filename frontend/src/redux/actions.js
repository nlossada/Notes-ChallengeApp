import axios from "axios"
import { CREATE_NOTE, GET_CATEGORIES, GET_NOTES } from "./actionType"

const URL = "http://localhost:3001"
// const URL = import.meta.env.VITE_URL;


//!--------------------------------- NOTES ---------------------------------------------------------------------------------------------

export const getNotes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/notes`)
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

//!--------------------------------- CATEGORIES ---------------------------------------------------------------------------------------------

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/categories`)
            dispatch({
                type: GET_CATEGORIES,
                payload: data
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
}