import { combineReducers } from "redux";
import { landingReducer } from "./landingReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";



export const rootReducers = combineReducers ({
    userReducer,
    productReducer,
    landingReducer,
    
})
