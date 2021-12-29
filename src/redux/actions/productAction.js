import axios from "axios";
import { API_URL } from "../../helper";
import reactDom from "react-dom";


// export const productAction = (nama, minimum, maximum) => {
//     return async (dispatch) => {
//         try {
//             let res;
//             if(nama){
//                 res = await axios.get(`${API_URL}/products?nama=${nama}`)
//             }else if (minimum, maximum) {
//                 res = await axios.get(`${API_URL}/products?harga_gte=${minimum}&harga_lte=${maximum}`)
//             }else {
//                 res = await axios.get(`${API_URL}/products`)
//             }
//             dispatch({
//                 type: "GET_DATA_PRODUCTS",
//                 payload: res.data
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// }

export const productAction = (data) => {
    console.log("get data product action", data)
    return {
        type: "GET_DATA_PRODUCTS",
        payload: data
    }
}