import {
    LOGIN_USER,
    REGISTER_USER,
    SET_COMMENTS,
} from "../constants/typeRedux";

const initialState = {
    login: {
        user: {
            name: "Nguyen Huu Chi",
            avatar: "",
            address: "Sa Huynh, Quang Ngai",
        },
    },
    register: {},
    comments: [],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload };
        case LOGIN_USER:
            console.log(action);
            localStorage.setItem("accessToken", action.payload.accessToken);
            console.log(action.payload.accessToken);
            return { ...state, login: action.payload };
        case SET_COMMENTS:
            return { ...state, comments: action.payload };
        default:
            return state;
    }
}
