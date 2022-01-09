const INITIAL_STATE = {
    landingList : []
}

export const landingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE_LANDING" :
            console.log("DATA LANDING", action.payload)
            return {
                ...state,
                landingList: action.payload
            }
            default :
            return state
    }
}