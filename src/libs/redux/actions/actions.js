import {ADD_TO_CART, DELETE_FROM_CART} from '../../../assets/constants';
export const addBook = book_to_add => {
  return {
    type: ADD_TO_CART,
    payload: book_to_add,
  };
};

export const removeBook = book_to_remove => {
  return {
    type: DELETE_FROM_CART,
    payload: book_to_remove,
  };
};
