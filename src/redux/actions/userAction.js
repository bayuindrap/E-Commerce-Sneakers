import axios from "axios";
import { API_URL } from "../../helper"


export const onRegister = (username, email, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(`${API_URL}/dataUser`, {
                username: username,
                email: email,
                password: password,
                role: "user",
                status: "Active",
                cart: [],
            })
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data[0]
            })
            return { success: true }


        } catch (error) {
            console.log(error)
        }
    }
}


export const loginAction = (username, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/dataUser?username=${username}&password=${password}`)
            if (res.data.length > 0) {
                localStorage.setItem("data", JSON.stringify(res.data[0]))
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                return { success: true }
            }
        } catch (error) {
            console.log(error)
        }
    }


}

export const logoutAction = () => {
    return {
        type: "LOGOUT"
    }
}


export const updateCart = (data, iduser) => {
    return async (dispatch) => {
        try {

            let res = await axios.patch(`${API_URL}/dataUser/${iduser}`, {
                cart: data
            })

            dispatch({
                type: "UPDATE_CART",
                payload: res.data.cart
            })
            return { success: true }
        } catch (error) {
            console.log(error)
        }

    }
}


