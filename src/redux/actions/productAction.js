import axios from "axios";
import reactDom from "react-dom";
import { API_URL } from "../../helper";


export const productAction = (nama, minimum, maximum) => {
    return async (dispatch) => {
        try {
            let res;
            console.log("cek search", nama)
            if(nama){
                res = await axios.get(`${API_URL}/products?nama=${nama}`)
            }else if (minimum, maximum) {
                res = await axios.get(`${API_URL}/products?harga_gte=${minimum}&harga_lte=${maximum}`)
            }else {
                res = await axios.get(`${API_URL}/products`)
            }
            dispatch({
                type: "GET_DATA_PRODUCTS",
                payload: res.data
            })
        }catch (error) {
            console.log(error)
        }
    }
}



export const sortingProduct = (sort) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/products?_sort=${sort.field}&_order=${sort.sortType}`)
            dispatch({
                type: "GET_DATA_PRODUCTS",
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

// export const productAction = (data) => {
//     console.log("get data product action", data)
//     return {
//         type: "GET_DATA_PRODUCTS",
//         payload: data
//     }
// }