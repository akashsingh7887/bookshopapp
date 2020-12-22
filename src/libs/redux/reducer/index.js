import {ADD_TO_CART, DELETE_FROM_CART} from '../../../assets/constants';
import {act} from 'react-test-renderer';
const initialState = {
  list: [],
};
// Reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        list:action.payload,
      };
    }

    case DELETE_FROM_CART: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default rootReducer;
