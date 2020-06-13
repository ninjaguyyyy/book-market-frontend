import { LOGIN_USER, REGISTER_USER } from "../constants/typeRedux";

const initialState = {
    login: {},
    register: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            console.log(action);
            return { ...state, register: action.payload };
        case LOGIN_USER:
            console.log(action);
            return { ...state, login: action.payload };
        default:
            return state;
    }
}
