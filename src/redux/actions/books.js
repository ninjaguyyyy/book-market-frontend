import { GET_BOOKS, GET_CATEGORIES, GET_BOOK } from '../types';
import { booksApi } from '../../api';

export async function getBooks(books) {
  return {
    type: GET_BOOKS,
    payload: books,
  };
}

export async function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
}

export async function getBook(book) {
  return {
    type: GET_BOOK,
    payload: book,
  };
}

export const fetchSellerBooks = (params) => async (dispatch) => {
  const response = await booksApi.get(params);
  console.log(response);
};
