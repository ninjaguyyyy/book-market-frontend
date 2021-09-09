import {
  GET_BOOK,
  GET_BOOKS,
  GET_BOOKS_SELLER,
  GET_CATEGORIES,
} from '../types';

const initialState = {
  booksShop: {},
  categories: [],
  bookDetail: {},
  booksSeller: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, booksShop: action.payload };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case GET_BOOK:
      return { ...state, bookDetail: action.payload };
    case GET_BOOKS_SELLER:
      return { ...state, booksSeller: action.payload };

    // return {
    //     ...state,
    //     booksSeller: state.booksSeller.push(action.payload),
    // };

    default:
      return state;
  }
}
