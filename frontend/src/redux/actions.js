import axios from "axios"
import { GET_NOTES } from "./actionType"

const URL = "http://localhost:3001"
// const URL = import.meta.env.VITE_URL;



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
