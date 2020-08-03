import { GET_BOOKS } from "../constants/typeRedux";

const initialState = {
    booksShop: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, booksShop: action.payload };

        default:
            return state;
    }
}
