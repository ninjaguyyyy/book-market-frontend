import { ADD_TO_CART } from "../constants/typeRedux";

export async function addToCart(cartItem) {
    return {
        type: ADD_TO_CART,
        payload: cartItem,
    };
}
