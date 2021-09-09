import {
  REMOVE_FROM_CART,
  SET_CART,
  GET_CART_DETAILS,
  ADD_TO_CART,
} from '../types';

const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...action.payload };
    case GET_CART_DETAILS:
      return { ...action.payload };
    case REMOVE_FROM_CART:
      return { ...action.payload };
    case SET_CART:
      return { ...action.payload };
    default:
      return state;
  }
}
