import { combineReducers } from "redux";

import user from "./user";
import books from "./books";
import cart from "./cart";

const rootReducer = combineReducers({
    user,
    books,
    cart,
});

export default rootReducer;
