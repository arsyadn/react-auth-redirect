const initialState = {
    dataLogin:null,
}

const authReducer = (state = initialState, action) => { //action (type, payload)
    switch(action.type) {
        case "SET_DATA_LOGIN":
            return{
                ...state,
                dataLogin: action.payload,
            }
            default:
                return state;
    }
}
export default authReducer;