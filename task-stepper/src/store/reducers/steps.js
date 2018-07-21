import { LOGIN_VISITED, PASSWORD_VISITED, ADDITIONAL_VISITED } from '../actions/actionsType';

const initialState = {
  wasLogin: false,
  wasPassword: false,
  wasAdditional: false
};

export const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_VISITED:
      return { ...state, wasLogin: true };
    case PASSWORD_VISITED:
      return { ...state, wasPassword: true };
    case ADDITIONAL_VISITED:
      return { ...state, wasAdditional: true };
    default:
      return state;
  }
};