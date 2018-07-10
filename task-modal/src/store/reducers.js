import {ACTION_CHANGE_MODAL_ACTIVITY} from './actions';

const initialState = {
  isActive: false
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_CHANGE_MODAL_ACTIVITY:
      return { ...state, isActive: action.payload.isActive };
    default:
      return state;
  }
};