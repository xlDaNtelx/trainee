import { GET_ALL_BOOKS } from './actions';

const initialState = {
  data: [],
  loading: true
};

export const bookReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_ALL_BOOKS :
        return {...state, ...action.payload};
      default:
        return state;
    }
  }