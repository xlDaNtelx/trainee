import { GET_ALL_BOOKS } from './actions';

// const initialState = {
//   isActive: false
// };

export const bookReducer = (state = [], action) => {
  switch(action.type) {
      case GET_ALL_BOOKS :
        return [...state, ...action.payload];
      default:
        return state;
    }
  }