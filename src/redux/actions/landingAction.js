import axios from "axios"
import { API_URL } from "../../helper"

export const updateLanding = (data) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/articles`, data)
            dispatch({
                type: "UPDATE_LANDING",
                payload: res.data
            })
            return { success: true }
        } catch (error) {
            console.log(error)
        }
    }
}