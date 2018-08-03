import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  form: formReducer
});

export const initializeStore = () =>
createStore(rootReducer, composeWithDevTools());