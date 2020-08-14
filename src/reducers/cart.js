import { ADD_TO_CART } from "../constants/typeRedux";
import {GET_CART_DETAILS} from "../constants/typeRedux"

const initialState = {
    cart: [],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case GET_CART_DETAILS:
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }
}
